<template>
  <div class="flex-container pa-12">
    <div class="flex-item">
      <v-img
        src="@/assets/test_image.png"
        width="55"
        :class="{avatarFocus: onFocus == true}"
      ></v-img>
    </div>
    <div class="flex-item textEdit pa-1 pl-4">
      <h5
        class="text-uppercase nameEdit"
        :class="{nameColor: onFocus == true }"
      >Hugh is</h5>
      <input
        type="text"
        v-model="amount"
        v-autowidth="{maxWidth: 'auto', minWidth: '50px', comfortZone: 0}"
        placeholder="7"
        @change="changeNumber($event)"
        @keypress="checkNumber($event)"
        @focus="onInputFocus()"
        @blur="outOfFocus()"
        class="inputEdit"
      >
      hours old
    </div>
  </div>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    amount: null,
    // amountTemp: null,
    onFocus: false
  }),
  methods: {
    changeNumber(event) {
      console.log("old number : ", event.target.value);
      this.amount = this.formatNumber(event.target.value);
      console.log("new number : ", this.amount);
    },
    checkNumber(event) {
      event = event ? event : window.event;
      var charCode = event.which ? event.which : event.keyCode;
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        event.preventDefault();
      } else {
        return true;
      }
    },
    formatNumber(amount) {
      if (
        amount !== "" ||
        amount !== undefined ||
        amount !== 0 ||
        amount !== "0" ||
        amount !== null
      ) {
        return amount.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      } else {
        return amount;
      }
    },
    onInputFocus() {
      this.onFocus = true;
    },
    outOfFocus() {
      this.onFocus = false;
    }
  }
};
</script>

<style>
.flex-container {
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-flex-wrap: nowrap;
  -ms-flex-wrap: nowrap;
  flex-wrap: nowrap;
  -webkit-justify-content: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-align-content: flex-start;
  -ms-flex-line-pack: start;
  align-content: flex-start;
  -webkit-align-items: flex-start;
  -ms-flex-align: start;
  align-items: flex-start;
}

.flex-item:nth-child(1) {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
}

.flex-item:nth-child(2) {
  -webkit-order: 0;
  -ms-flex-order: 0;
  order: 0;
  -webkit-flex: 0 1 auto;
  -ms-flex: 0 1 auto;
  flex: 0 1 auto;
  -webkit-align-self: auto;
  -ms-flex-item-align: auto;
  align-self: auto;
}

.inputEdit {
  border: 0;
  outline: 0;
  border-bottom: 1px solid grey;
  padding-bottom: 4%;
  padding-top: 4%;
  font-weight: bold;
}

.inputEdit:focus {
  border-color: #2540ff;
}

.nameColor {
  color: #2540ff !important;
}

.textEdit {
  font-family: Roboto;
  font-size: 14px;
}

.nameEdit {
  font-size: 13px;
  letter-spacing: 0.8px;
  font-weight: bold;
}

.avatarFocus {
  width: 59px;
  height: 59px;
  border: solid 2px #2540ff;
  border-radius: 50%;
}
</style>