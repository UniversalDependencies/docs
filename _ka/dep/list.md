---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

`list` is used for list items. <code>list</code> covers bullet points, numbered lists and similar cases. E.g.

~~~ sdparse
1937-1938 წლებში რეპრესირებულთა სია: 1. აბაევა; 2. აბაზაძე; 3. აბაკელია. /n 'List of those repressed in 1937-1938: 1. Abaeva; 2. Abazadze; 3. Abakelia.' 
list(სია, აბაევა)
list(სია, აბაზაძე)
list(სია, აბაკელია)
~~~

However it does **not** cover list items constructed with coordinating conjunctions and punctuation: those cases are covered by the dependency relations [cc](_ka/dep/cc) and [conj](_ka/dep/conj). 
<!-- Interlanguage links updated Po 11. listopadu 2024, 20:10:59 CET -->
