---
layout: relation
title: 'case:loc'
shortdef: 'postpositional localizer'
udver: '2'
---

We treat a closed set of postpositions (traditionally known as “improper adpositions”) as localizers. (See [ADP]() for a list of localizers.)

The head of the localizer is the noun or the main verb of the clause preceding it. Localizers are always tagged ADP (adposition). When it follows a noun, it receives the `case:loc` relation label.

~~~ sdparse
գինետան.Dat/NOUN մոտով.Ins/ADP \n by the-tavern.Dat
case:loc(գինետան.Dat, մոտով.Ins)
case:loc(the-tavern.Dat, by)
~~~

~~~ sdparse
Վերցրեց գիրքը սեղանի.Dat/NOUN վրայից.Abl/ADP ։ \n He-took the-book from-on the-table .
case:loc(սեղանի.Dat, վրայից.Abl)
case:loc(the-table, from-on)
~~~

~~~ sdparse
Ճանապարհն անցնում էր դաշտերի.Dat/NOUN միջով.Ins/ADP ։ \n The-road passed through the-fields .
case:loc(դաշտերի.Dat, միջով.Ins)
case:loc(the-fields, through)
~~~
