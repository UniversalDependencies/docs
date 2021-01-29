---
layout: relation
title: 'appos'
shortdef: 'appositional modifier'
udver: '2'
---

An appositional modifier of a noun is a nominal immediately following the first noun that serves to define, modify, name, or describe that noun. It includes parenthesized examples, as well as defining abbreviations in one of these structures.

* Names, headings:

~~~ sdparse
kohvik Moskva \n caffee Moskva
appos(kohvik, Moskva-2)
appos(caffee, Moskva-5)
~~~

~~~ sdparse
kirjanik ja tolkija Juhan Tamm \n writer and translator Juhan Tamm
appos(kirjanik, Juhan-4)
cc(tolkija, ja)
conj(kirjanik, tolkija)
flat(Juhan-4,Tamm-5)
appos(writer, Juhan-10)
cc(translator, and)
conj(writer, translator)
flat(Juhan-10,Tamm-11)
~~~

* Descriptions:

~~~ sdparse
detsembris , kõige trööstitumal aastaajal \n in December , the most depressing season
appos(detsembris, aastaajal)
appos(December, season)
~~~



<!-- Interlanguage links updated Čt lis 12 09:43:13 CET 2020 -->
