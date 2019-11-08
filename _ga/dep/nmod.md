---
layout: relation
title: 'nmod'
shortdef: 'nominal modifier'
udver: '2'
---

The `nmod` relation is used for nominal modifiers of nouns or clausal predicates. `nmod` is typically a noun functioning as a non-core (oblique) argument or adjunct, and often marked by a preposition using [case]().

### Examples

_Tá sé ráite ag <b>tráchtairí</b> áirithe_ 'It is said by some <b>commentators</b>'

~~~ sdparse
Tá sé ráite ag tráchtairí áirithe \n Is it said by commentators some
nmod(ráite, tráchtairí)
case(tráchtairí, ag)
~~~

_Tá an Roinn ag obair le <b>réimse</b> tionscadal_ 'The Department is working with a <b>range</b> of projects'

~~~ sdparse
Tá an Roinn ag obair le réimse tionscadal \n Is the Department at working with range projects
nmod(obair,réimse)
case(réimse, le)
~~~

It is also used for attaching noun phrases, such as headings, to clauses:

_<b>TOGRA</b> IONAID - Eolas a chur ar fáil ar fholúntais fostaíochta le FÁS_ 'CENTRE <b>PROJECT</b> - To provide information on employment opportunities with FÁS.'

~~~ sdparse
TOGRA IONAID - Eolas a chur ar fáil ar fholúntais fostaíochta le FÁS \n PROJECT CENTRE - Information to put on getting on opportunities employment with FÁS.
nmod(Eolas, TOGRA)
~~~ 

It is also used to label the attachment of _augment pronouns_ to their nominal head:

_Comharsain aoibhne ab <b>ea</b> iad_ 'They <b>were</b> lovely neighbours'

~~~ sdparse
Comharsain aoibhne ab ea iad \n Neighbours lovely were they them
nmod(iad, ea)
~~~

Verbal nouns which act adjectivally and appear in the genitive are usually labelled as `nmod`. 

_Caladh mór <b>tráchtála</b> atá ann chomh maith._ 'It's also a large wave of <b>traffic</b>.'

~~~ sdparse
Caladh mór tráchtála atá ann chomh maith \n Wave big of_traffic that_is there as well 
nmod(Caladh, tráchtála)
~~~

Two nouns coming together also come under this dependency label: 

_Mise agus mo chuid <b>clabaireachta</b>._ 'Me and my <b>babbling</b>'

~~~ sdparse
Mise agus mo chuid clabaireachta \n Myself and my part of_babbling. 
nmod(chuid, clabaireachta)
~~~

_Ba i dtaobh <b>poist</b> a bhí mé ag caint leis siúd._ 'I was talking to him about a <b>job</b>'

~~~ sdparse
Ba i dtaobh poist a bhí mé ag caint leis siúd \n Was in side of_a job that was I at talking with_him that.  
nmod(dtaobh, poist)
~~~

#### Reflexive Pronoun: féin

Similar to the emphatic pronoun _self_ in English, e.g. himself, themselves.

~~~ sdparse
Cé hiad féin ? \n Who are THEY ?
compound(hiad, féin)
~~~ 

#### Ownership:

It can also translate as ownership, yet the possessive pronoun will also be present in those constructions using _féin_:

~~~ sdparse
ábalta a rá lena bpobal féin \n able to say to their own community
compound(bpobal, féin)
~~~


~~~ sdparse
le bean Choilm \n with Colm's wife
compound(bean, Choilm)
~~~

