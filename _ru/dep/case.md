---
layout: relation
title: 'case'
shortdef: 'case marking'
udver: '2'
---

Russian uses a combination of oblique morphological cases and prepositions to express semantic case.
Prepositions in UD are treated as dependents of the noun they attach to. The relation between the nominal and the preposition is labeled `case`.

~~~ sdparse
В пятницу.Acc по дороге.Dat к деревне.Dat мы разговаривали o событии.Loc . \n On Friday during the-journey to the-village we talked about the-event .
case(пятницу.Acc, В)
case(Friday, On)
case(дороге.Dat, по)
case(the-journey, during)
case(деревне.Dat, к)
case(the-village, to)
case(событии.Loc, o)
case(the-event, about)
~~~

The postpositive use of _ради_ “for“ is also labeled `case`.

~~~ sdparse
Бога ради \n for God's sake
case(Бога, ради)
case(sake, for)
~~~

The staked prepositions are usually written as one token in Russian. Whould they be written separately in electronic communication or in texts written in old orpthography, they should be labeled either [goeswith]() or [fixed](). 

~~~ sdparse
из-за меня \n because-of me
case(меня, ради)
case(me, because-of)
~~~

~~~ sdparse
из за меня \n because of me
goeswith(меня, ради)
goeswith(me, because-of)
~~~

In the comparative construction, the subordinate conjunction _чем_ “than“ that attaches the nominal phrase is labeled `case` as well. If it is a prepositional nominal phrase, both prepositions are attached to the head of the nominal phrase.

~~~ sdparse
лучше, чем на кухне \n better than in the-kitchen
case(кухне, чем)
case(the-kitchen, than)
case(кухне, на)
case(the-kitchen, in)
~~~

<!-- Interlanguage links updated Čt lis 12 09:43:15 CET 2020 -->
