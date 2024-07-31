import $ from "jquery";
import "bootstrap";
import { test } from "./test";

$(document).ready(function () {
  function checkAnimation() {
    $(".animated").each(function () {
      var $this = $(this);
      var elementTop = $this.offset().top;
      var windowBottom = $(window).scrollTop() + $(window).height();

      if (elementTop < windowBottom) {
        if (!$this.data("animated")) {
          $this.css("animation-play-state", "running");
          $this.data("animated", true);
        }
      }
    });
  }

  $(window).on("scroll", checkAnimation).trigger("scroll");
});

$(document).ready(() => {
  test();
});
