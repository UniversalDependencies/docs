---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
---

The `nmod` relation is used for nominal modifiers of nouns or clausal predicates. `nmod` is typically a noun functioning as a non-core (oblique) argument or adjunct, and often marked by a preposition using [case]().

### Examples

_Tá sé ráite ag <b>tráchtairí</b> áirithe_ `It is said by some <b>commentators</b>'

~~~ sdparse
Tá sé ráite ag tráchtairí áirithe \n Is it said by commentators some
nmod(ráite, tráchtairí)
case(tráchtairí, ag)
~~~

_Tá an Roinn ag obair le <b>réimse</b> tionscadal_ `The Department is working with a <b>range</b> of projects'

~~~ sdparse
Tá an Roinn ag obair le réimse tionscadal \n Is the Department at working with range projects
nmod(obair,réimse)
case(réimse, le)
~~~



It is also used for attaching noun phrases, such as headings, to clauses:

_<b>TOGRA</b> IONAID - Eolas a chur ar fáil ar fholúntais fostaíochta le FÁS_ `CENTRE <b>PROJECT</b> - To provide information on employment opportunities with FÁS.'

~~~ sdparse
TOGRA IONAID - Eolas a chur ar fáil ar fholúntais fostaíochta le FÁS \n PROJECT CENTRE - Information to put on getting on opportunities employment with FÁS.
nmod(Eolas, TOGRA)
~~~ 

It is also used to label the attachment of _augment pronouns_ to their nominal head:

_Comharsain aoibhne ab <b>ea</b> iad_ `They were lovely neighbours'

~~~ sdparse
Comharsain aoibhne ab ea iad \n Neighbours lovely were they them
nmod(iad, ea)
~~~







