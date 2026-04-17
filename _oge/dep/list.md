---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

`list` is used for list items. <code>list</code> covers bullet points, numbered lists and similar cases. E.g.

~~~ sdparse
თავის მოწაფეთაგან გამოარჩია სამი: პეტრე, იაკობი და იოანე. /n 'From his disciples he chose three: Peter, James, and John.' 
list(სამი, პეტრე)
list(სამი, იაკობი)
list(სამი, იოანე)
~~~

However it does **not** cover list items constructed with coordinating conjunctions and punctuation: those cases are covered by the dependency relations [cc](_oge/dep/cc) and [conj](_oge/dep/conj). 
<!-- Interlanguage links updated So 10. května 2025, 18:15:38 CEST -->
