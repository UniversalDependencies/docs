---
layout: relation
title: 'dep'
shortdef: 'unspecified dependency'
udver: '2'
---

A dependency is labeled as `dep` when a more precise dependency relation between two words cannot be determined. This may be because of a weird grammatical construction, a limitation in software, a parser error, or because of an unresolved long distance dependency.

~~~ sdparse
Տարածաշրջան , Ուրբաթ 18 Դեկտեմբեր 2015 \n Region , Friday 18 December 2015
dep(Տարածաշրջան, Ուրբաթ)
appos(Ուրբաթ, 18-4)
flat(18-4, Դեկտեմբեր)
flat(18-4, 2015-6)
dep(Region, Friday)
appos(Friday, 18-11)
flat(18-11, December)
flat(18-11, 2015-13)
~~~
