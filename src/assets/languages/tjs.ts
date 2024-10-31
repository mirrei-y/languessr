import { Language } from "./base";

export default class TJSLanguage extends Language {
  public constructor() {
    super({
      displayName: "TJS",
      highlightType: null,
      programs: [
        `[eval exp="tf.i = 1"]
*loopstart|
[if exp="tf.i % 3 == 0 && tf.i % 5 == 0"]
    FizzBuzz[r]
[elsif exp="tf.i % 3 == 0"]
    Fizz[r]
[elsif exp="tf.i % 5 == 0"]
    Buzz[r]
[else]
    [emb exp="tf.i"][r]
[endif]
[eval exp="tf.i++"]
[if exp="tf.i <= 100"][jump target=*loopstart][endif]`
      ]
    })
  }
}
