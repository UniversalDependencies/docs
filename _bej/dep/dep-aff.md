---
layout: relation
title: 'dep:aff'
shortdef: 'affix unspecified dependency'
udver: '2'
---

UD manage dependency that can be labeled as `dep` when it is impossible to determine a more precise relation.
We used this relation on addition to a subrelation `aff` to describe the relation between verb and morpho-phonological linker (tag as `X`, see [other](pos/X)).

~~~ sdparse
ontʔa / daːjeːb // j= halak -a / i- naːʃʔa bʔi -ja -n =hoːb // tak iː- kti =jeːt toː= na i- kan =heːb //
text_en: "So, when he had finished undressing properly, he realized I was a man!"
dep:aff(naːʃʔa, -n) ("take_off", linker)
~~~
