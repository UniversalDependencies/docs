---
layout: relation
title: 'case:loc'
shortdef: 'postpositional localizer'
udver: '2'
---

We treat a closed set of postpositions (traditionally known as “improper adpositions”) as localizers. (See [ADP]() for a list of localizers.)

The head of the localizer is the noun or the main verb of the clause preceding it. Localizers are always tagged ADP (adposition). When it follows a noun, it receives the `case:loc` relation label.

~~~ sdparse
գինետան/NOUN[Case=Dat] մոտով/ADP[Case=Ins] \n by the-tavern
case:loc(գինետանt, մոտով)
case:loc(the-tavern, by)
~~~

~~~ sdparse
Վերցրեց գիրքը սեղանի/NOUN[Case=Dat] վրայից/ADP[Case=Abl] ։ \n He-took the-book from-on the-table .
case:loc(սեղանի, վրայից)
case:loc(the-table, from-on)
~~~

~~~ sdparse
Ճանապարհն անցնում էր դաշտերի/NOUN[Case=Dat] միջով/ADP[Case=Ins] ։ \n The-road passed through the-fields .
case:loc(դաշտերի, միջով)
case:loc(the-fields, through)
~~~
