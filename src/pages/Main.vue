<template>
  <div class="main">
    <div class="calendar">
      <v-calendar
          is-expanded
          class="custom-calendar"
          :masks="masks"
          :attributes="fullAttributes"
          title-position="left"
          trim-weeks
          @update:to-page="onPageChange"
      >
        <template v-slot:day-content="{ day, attributes }">
          <div class="day">
            <span class="day-label">{{ day.day }}</span>
            <div class="day-text">
              <p
                  v-if="!holidays.includes(`${day.day}.${day.month}`) && (day.weekday === 1 || day.weekday === 7)"
                  class="day-event"
              >
                Выходной
              </p>
              <p
                  v-else
                  v-for="attr in attributes"
                  :key="attr.key"
                  class="day-event"
                  :style="{background: colors[attr.customData.title]}"
              >
                {{ attr.customData.title }}
              </p>
            </div>
          </div>
        </template>
        <template v-slot:header-left-button>
          <button class="back-button">
            <img :src="backButtonImg" alt="Прошлый месяц">
          </button>
        </template>
        <template v-slot:header-right-button>
          <button class="next-button">
            <img :src="nextButtonImg" alt="Следующий месяц">
          </button>
        </template>
      </v-calendar>
    </div>
    <div class="employee">
      <div class="employee__name">
        <v-select v-model="selectedEmployee" class="employee__select"
                  :options="options" :clearable="false" @input="onEmployeeChange">

          <template #selected-option="{ label, img }">
            <div class="selected-option">
              <div class="selected-option__img">
                <img :src="img" alt="Фото сотрудника">
              </div>
              <p>{{ label }}</p>
            </div>
          </template>
          <template #open-indicator="{ attributes }">
            <img v-bind="attributes" :src="openIconImg" class="open-indicator">
          </template>
        </v-select>
      </div>
      <div class="employee__data">
        <div class="employee__trips">
          <p class="employee__duration">{{ attributes.length }}</p>
          <p>{{ attributes.length | formatWord(['поездка', 'поездки', 'поездок']) }}</p>
        </div>
        <div class="employee__days">
          <p class="employee__duration">{{ tripLength }}</p>
          <p>{{ tripLength | formatWord(['день', 'дня', 'дней']) }} командировки</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import backButtonImg from '../assets/button-back.png'
import nextButtonImg from '../assets/button-next.png'
import moment from 'moment'
import {pics} from "@/assets/common/pics";
import userPic from '../assets/img/user.jpg'
import openIconImg from '../assets/img/open-icon.svg'

export default {
  data() {
    return {
      employeesInfo: [],
      selectedEmployee: {},
      colors: {},
      holidays: [],
      displayedYear: null,
      tripLength: 0,
      backButtonImg,
      nextButtonImg,
      openIconImg,
      masks: {
        weekdays: 'WWWW',
      },
      attributes: [
        // {
        //   key: 1,
        //   customData: {
        //     title: 'Вологда',
        //     class: 'bg-red-600 text-white',
        //   },
        //   dates: new Date(year, month, 1),
        // },
        // {
        //   key: 2,
        //   customData: {
        //     title: 'Рязань',
        //     class: 'bg-blue-500 text-white',
        //   },
        //   dates: new Date(year, month, 2),
        // },
        // // {
        // //   key: 3,
        // //   customData: {
        // //     title: "Noah's basketball game.",
        // //     class: 'bg-blue-500 text-white',
        // //   },
        // //   dates: new Date(year, month, 5),
        // // },
        // {
        //   key: 4,
        //   customData: {
        //     title: 'Ефремов',
        //     class: 'bg-indigo-500 text-white',
        //   },
        //   dates: new Date(year, month, 5),
        // },
        // {
        //   key: 4,
        //   customData: {
        //     title: 'Вологда',
        //     class: 'bg-teal-500 text-white',
        //   },
        //   dates: new Date(year, month, 7),
        // },
        // {
        //   key: 5,
        //   customData: {
        //     title: "Екатеринбург",
        //     class: 'bg-pink-500 text-white',
        //   },
        //   dates: new Date(year, month, 11),
        // },
        // {
        //   key: 6,
        //   customData: {
        //     title: 'Mocква',
        //     class: 'bg-orange-500 text-white',
        //   },
        //   dates: {months: 5, ordinalWeekdays: {2: 1}},
        // },
        // {
        //   key: 7,
        //   customData: {
        //     title: "Mocква",
        //     class: 'bg-pink-500 text-white',
        //   },
        //   dates: new Date(year, month, 22),
        // },
        // {
        //   key: 8,
        //   customData: {
        //     title: 'Mocква',
        //     class: 'bg-red-600 text-white',
        //   },
        //   dates: new Date(year, month, 25),
        // },
      ],
    };
  },
  mounted() {
    this.fetchEmployees()
    this.onEmployeeChange()
    fetch(`./API/colors.json`)
        .then(response => response.json())
        .then(response => {
          this.colors = response
        })

    fetch(`./API/holidays.json`)
        .then(response => response.json())
        .then(response => {
          this.holidays = response
        })
  },
  computed: {
    options() {
      return this.employeesInfo.map((employee) => {
        return {
          label: employee.name,
          id: employee.id,
          img: pics[employee.id] || userPic
        }
      })
    },
    fullHolidays() {
      return this.holidays.map((holiday) => {
        const [day, month] = holiday.split('.')
        return {
          customData: {
            title: "Праздник"
          },
          dates: new Date(this.displayedYear, month - 1, day)
        }
      })
    },
    fullAttributes() {
      return [...this.attributes, ...this.fullHolidays]
    }
  },

  filters: {
    formatWord(value, words) {
      value = Math.abs(value) % 100;
      var num = value % 10;
      if (value > 10 && value < 20) return words[2];
      if (num > 1 && num < 5) return words[1];
      if (num === 1) return words[0];
      return words[2];
    }
  },

  methods: {
    onPageChange(e) {
      this.displayedYear = e.year
    },

    fetchEmployees() {
      fetch(`./API/employees.json`)
          .then(response => response.json())
          .then((response) => {
            this.employeesInfo = response.employees
            if (!this.selectedEmployee.label) {
              this.selectedEmployee = this.options[0]
            }
            this.onEmployeeChange()
          })
    },
    onEmployeeChange() {
      if (!this.employeesInfo.length) return
      const employeeTrips = this.getEmployeeById(this.selectedEmployee.id).businessTrips
      this.tripLength = 0
      this.attributes = employeeTrips.map((trip, i) => {
        const dateArrayStart = trip.date.start.split(`.`)
        const dateArrayEnd = trip.date.end.split(`.`)
        const [day, month, year] = dateArrayStart
        const [dayEnd, monthEnd, yearEnd] = dateArrayEnd
        const employeeData = {
          key: i,
          customData: {
            title: trip.cityName,
          },
          dates: [
            {start: new Date(year, month - 1, day), end: new Date(yearEnd, monthEnd - 1, dayEnd)},
          ]
        }
        const diff = new moment.duration(employeeData.dates[0].end - employeeData.dates[0].start);
        this.tripLength += diff.asDays() + 1
        return employeeData
      })
    },
    getEmployeeById(id) {
      return this.employeesInfo.find(it => it.id === id)
    }
  }
};
</script>

<style lang="scss" scoped>

.employee {
  display: flex;
  height: fit-content;
  flex-direction: column;
}

.employee__select {
  height: fit-content;
  width: 100%;
  position: relative;

  &::after {
    width: 1px;
    height: 100%;
    content: "";
    top: 0;
    right: 47px;
    position: absolute;
    border-left: 1px solid rgba(0, 66, 105, 0.28);
  }
}

.employee__name {
  margin-bottom: 10px;
  background: white;
  padding: 26px 26px 26px 32px;
  border-radius: 6px;
}

.employee__data {
  background: white;
  padding: 48px 36px 30px 30px;
  border-radius: 6px;
}

.employee__trips {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);;
}

.employee__trips,
.employee__days {
  display: flex;
  justify-content: space-between;
}

.main {
  display: flex;
}

.calendar {
  //max-width: 954px;
  background: white;
  width: 70%;
  margin-right: 30px;
  padding: 19px 27px 66px;
  border-radius: 6px;
}

.employee {
  width: 438px;
}

.day-text {

}

.back-button, .next-button {
  border: none;
  background: transparent;
  padding: 0;
}

.employee__duration {
  font-weight: normal;
  font-size: 32px;
  line-height: 120%;
  margin: 0;
  display: flex;
  align-items: center;
}

.vs__dropdown-toggle {
  border: 1px solid rgba(0, 66, 105, 0.28)
}


.employee__select {
  height: 43px;

  &::v-deep {
    .vs__actions {
      width: 47px;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
    }

    .vs__search {
      display: none;
    }
  }
}

.employee__select.vs--open::v-deep {
  .vs__dropdown-toggle {
    height: 100%;
  }
}


.selected-option {
  display: flex;
  align-items: center;

  p {
    margin: 0 0 0 10px;
    white-space: nowrap;
  }
}

.selected-option__img {
  width: 32px;
  height: 32px;
  overflow: hidden;
  border-radius: 50%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}

///


//::-webkit-scrollbar {
//  width: 0px;
//}
//
//::-webkit-scrollbar-track {
//  display: none;
//}

/deep/ .custom-calendar.vc-container {
  --day-border: 1px solid #E9E9E9;
  --day-border-highlight: 1px solid #eaeaea;
  --day-width: 90px;
  --day-height: 90px;
  --weekday-bg: #f8fafc;
  --weekday-border: 1px solid #eaeaea;
  border-radius: 0;
  width: 100%;
  border: none;
  border-bottom: var(--day-border-highlight);

  & .vc-header {
    //background-color: #f1f5f8;
    padding: 10px 0 14px;
    color: #002033;
    text-transform: capitalize;

  }

  & .vc-title {
    font-size: 32px;
    font-family: "Roboto Condensed", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    line-height: 150%;
  }

  & .vc-weeks {
    padding: 0;
  }

  & .vc-weekday {
    //background-color: var(--weekday-bg);
    border-bottom: var(--weekday-border);
    border-top: var(--weekday-border);
    text-transform: capitalize;
    text-align: left;
    padding: 33px 0 5px;
    color: black;
    font-size: 12px;
    border-top: 2px solid rgba(0, 65, 102, 0.1);
    font-family: 'Roboto Condensed', Arial, sans-serif;
  }

  & .vc-day {
    //padding: 0 5px 3px 5px;
    text-align: left;
    //height: var(--day-height);
    min-width: var(--day-width);
    background-color: white;


    &.weekday-1,
    &.weekday-7 {
      background-color: #FCFCFC;
    }

    &.weekday-2 {
      border-left: var(--day-border-highlight);
    }

    &.weekday-1 {
      border-right: var(--day-border-highlight);
    }

    &:not(.on-bottom) {
      border-bottom: var(--day-border);

      &.weekday-1 {
        border-bottom: var(--day-border-highlight);
      }
    }

    &:not(.on-right) {
      border-right: var(--day-border);
    }
  }

  & .vc-day-dots {
    margin-bottom: 5px;
  }

  //

  .vc-day.is-not-in-month * {
    opacity: 0.5;
  }

  .day {
    display: flex;
    //background: red;
    flex-direction: column;
    padding: 7px 7px 8px;
    height: 100%;
    min-height: 90px;
  }

  .day-label {
    margin-left: auto;
    font-family: 'Roboto Condensed', Arial, sans-serif;
  }

  .day-text {
    margin-top: auto;
  }

  .day-event {
    background: #97B2C4;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 4px;
    min-height: 22px;
    display: flex;
    align-items: center;
    color: white;
    line-height: 18px;
    margin: 0 0 auto auto;
    font-size: 12px;
    width: fit-content;
    font-family: 'Roboto Condensed', Arial, sans-serif;
  }

}


</style>