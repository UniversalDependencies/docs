---
layout: relation
title: 'dislocated'
shortdef: 'dislocated elements'
---

The dependency type `dislocated` is used for topic phrases.
A topic phrase introduces the topic of a sentence, and are typically prepositional phrases with a topic marker は / *ha*.
One of the most famous examples is 象 は 鼻 が 長い 。/ *zou wa hana ga nagai* "For elephants, noses are long."

~~~ sdparse
象 は 鼻 が 長い 。 \n elephant TOPIC nose NOM long .
dislocated(長い, 象)
case(象, は)
case(鼻, が)
nsubj(長い, 鼻)
punct(長い, 。)
~~~

Note that the relation is not used for a topicalized phrase that is also a core argument of the sentence.

~~~ sdparse
太郎 は 東京 へ 行く 。\n Taro TOPIC Tokyo TO go .
case(太郎, は)
case(東京, へ)
nsubj(行く, 太郎)
nmod(行く, 東京)
~~~
