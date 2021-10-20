<template>
  <div class="main">
    <div class="calendar">
      <v-calendar
          is-expanded
          class="custom-calendar"
          :masks="masks"
          :attributes="attributes"
          title-position="left"
          trim-weeks
      >
        <template v-slot:day-content="{ day, attributes }">
          <div class="day">
            <span class="day-label">{{ day.day }}</span>
            <div class="day-text">
              <p
                  v-for="attr in attributes"
                  :key="attr.key"
                  class="day-event"
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
      Сотрудник
    </div>
  </div>
</template>

<script>
import backButtonImg from '../assets/button-back.png'
import nextButtonImg from '../assets/button-next.png'

export default {
  data() {

    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return {
      backButtonImg,
      nextButtonImg,
      masks: {
        weekdays: 'WWWW',
      },
      attributes: [
        {
          key: 1,
          customData: {
            title: 'Вологда',
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, month, 1),
        },
        {
          key: 2,
          customData: {
            title: 'Рязань',
            class: 'bg-blue-500 text-white',
          },
          dates: new Date(year, month, 2),
        },
        // {
        //   key: 3,
        //   customData: {
        //     title: "Noah's basketball game.",
        //     class: 'bg-blue-500 text-white',
        //   },
        //   dates: new Date(year, month, 5),
        // },
        {
          key: 4,
          customData: {
            title: 'Ефремов',
            class: 'bg-indigo-500 text-white',
          },
          dates: new Date(year, month, 5),
        },
        {
          key: 4,
          customData: {
            title: 'Вологда',
            class: 'bg-teal-500 text-white',
          },
          dates: new Date(year, month, 7),
        },
        {
          key: 5,
          customData: {
            title: "Екатеринбург",
            class: 'bg-pink-500 text-white',
          },
          dates: new Date(year, month, 11),
        },
        {
          key: 6,
          customData: {
            title: 'Mocква',
            class: 'bg-orange-500 text-white',
          },
          dates: {months: 5, ordinalWeekdays: {2: 1}},
        },
        {
          key: 7,
          customData: {
            title: "Mocква",
            class: 'bg-pink-500 text-white',
          },
          dates: new Date(year, month, 22),
        },
        {
          key: 8,
          customData: {
            title: 'Mocква',
            class: 'bg-red-600 text-white',
          },
          dates: new Date(year, month, 25),
        },
      ],
    };
  },
  mounted() {
    fetch(`/API/employees.json`)
        .then(response => response.json())
        .then((response) => {
          this.attributes = []
          const employeeTrips = response.employees[0].businessTrips
          employeeTrips.map((trip, i) => {
            const dateArray = trip.date.split(`.`)
            const [day, month, year] = dateArray
            console.log(`dateArray`, dateArray);
            const employeeData = {
              key: i,
              customData: {
                title: trip.cityName,
              },
              dates: new Date(year, month - 1, day),
            }
            this.attributes.push(employeeData)

          })

        })
  }
};
</script>

<style lang="scss" scoped>

.employee {
  display: flex;
  background: wheat;
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
  }

  .day-text {
    margin-top: auto;
  }

  .day-event {
    background: red;
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
  }

}


</style>