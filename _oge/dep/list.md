---
layout: relation
title: 'list'
shortdef: 'list'
udver: '2'
---

`list` is used for list items. <code>list</code> covers bullet points, numbered lists and similar cases. E.g.

~~~ sdparse
თავის მოწაფეთაგან გამოარჩია სამი: პეტრე, იაკობი და იოანე. /n 'From his disciples he chose three: Peter, James and John.' 
list(სამი, პეტრე)
list(სამი, იაკობი)
list(სამი, იოანე)
~~~

In Old Georgian, numbers could be expressed with letters. So a list introduced by such a numeral can still take list dependents. E.g. 
~~~ sdparse
იე კერძო-დიაკონი უდარეს ოცთა წელიწადთაჲსა... '15. A private deacon younger than twenty years...'
ივ ვინაჲთგან წიგნნი საქმეთანი... '16. Since the books of the Acts...'
იზ ვინაჲთგან მრავალთა ეკლესიათა... (დიდი სჯულის კანონი) '17. Since of many churches...'
list(იე, კერძო-დიაკონი)
list(ივ, წიგნნი)
list(იზ, ეკლესიათა)
~~~

However it does **not** cover list items constructed with coordinating conjunctions and punctuation: those cases are covered by the dependency relations [cc](_oge/dep/cc) and [conj](_oge/dep/conj). 
<!-- Interlanguage links updated Po 29. června 2026, 17:44:15 CEST -->
