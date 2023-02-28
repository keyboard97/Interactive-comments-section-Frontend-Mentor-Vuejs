import { computed, ref } from "vue";

export const useDimension = () => {
  // variable that have a reference of the height od the device that render the app
  const deviceHeight = ref(window.innerHeight);
  // variable that have a reference of the width od the device that render the app
  const deviceWidth = ref(window.innerWidth > 1920 ? 1920 : window.innerWidth);

  /**
   * Method that modify the reference of the width variable
   *
   * @returns
   */
  const onWindowResize = () =>
    (deviceWidth.value = window.innerWidth > 1920 ? 1920 : window.innerWidth);

  /**
   * Computed method that calculate the width of the right and left main containers in the app.
   * - If the app is render in a desktop device left container have a 32% of the screen and
   * right container have the rest width minus 80px (it comprends margin between the containers)
   * - If the app is render in a mobile device both containers have the same width
   */
  const computedUploadLeftContainerWidth = computed(() => {
    return deviceWidth.value > 900
      ? `${Math.round(deviceWidth.value * 0.32)}px`
      : `${Math.round(deviceWidth.value * 0.8)}px`;
  });
  const computedUploadRightContainerWidth = computed(() => {
    return deviceWidth.value > 900
      ? `${deviceWidth.value - Math.round(deviceWidth.value * 0.32) - 80}px`
      : `${Math.round(deviceWidth.value * 0.8)}px`;
  });

  /**
   * Method that computed if the devices that render the app is a mobile device or not
   */
  const isMobile = computed(() => {
    return deviceWidth.value > 600 ? false : true;
  });

  /**
   * Adding the event resize and if it happend execute the method onWindowResize that modify
   * the reference variables
   */
  window.addEventListener("resize", onWindowResize);

  return {
    isMobile,
    deviceHeight,
    deviceWidth,
    computedUploadLeftContainerWidth,
    computedUploadRightContainerWidth,
  };
};
