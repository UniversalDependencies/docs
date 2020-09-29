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

#### Quantifying Nouns

_Mise agus mo chuid <b>clabaireachta</b>._ 'Me and my <b>babbling</b>'

~~~ sdparse
Mise agus mo chuid clabaireachta \n Myself and my part of_babbling. 
nmod(chuid, clabaireachta)
~~~

#### Nouns Modifying Nouns

_Ba i dtaobh <b>poist</b> a bhí mé ag caint leis siúd._ 'I was talking to him about a <b>job</b>'

~~~ sdparse
Ba i dtaobh poist a bhí mé ag caint leis siúd \n Was in side of_a job that was I at talking with_him that.  
nmod(dtaobh, poist)
~~~

#### Reflexive Pronoun: féin

Similar to the emphatic pronoun _self_ in English, e.g. himself, themselves.

~~~ sdparse
Cé hiad féin ? \n Who are THEY ?
nmod(hiad, féin)
~~~ 

#### Ownership:

It can also translate as ownership, yet the possessive pronoun will also be present in those constructions using _féin_:

~~~ sdparse
ábalta a rá lena bpobal féin \n able to say to their own community
nmod(bpobal, féin)
~~~

~~~ sdparse
le bean Choilm \n with Colm's wife
nmod(bean, Choilm)
~~~

#### Months:

In Irish, the word for month is _mí_ (lit. 'the month of'). We often use the word _mí_ when referring to a paricular month. For example <b>mí Iúil</b> means 'the month of July'. The name of the month follows 'mí' in the genitive case. We label the name of the month as `nmod`. Months that are composed of more than two nouns are treated as `flat`.

NOTE: We also treat days of the week as [flat](https://universaldependencies.org/ga/dep/flat.html) 

~~~ sdparse
Caitheadh pióg le Bertie Ahern le linn an fheachtais olltoghcháin i mí Aibreáin \n A pie was thrown at Bertie Ahern during the election campaign in the month of April
obl:tmod(Caitheadh, fheachtais)
nmod(fheachtais, mí)
nmod(mí, Aibreáin)
~~~

A simple, non specific date string should also be treated as nmod per the UD guidelines. 

_sa bhliain <b>1975</b>_ `in the year <b>1975</b>'

~~~ sdparse
sa bhliain 1975 \n in year 1975
flat(bhliain, 1975)
~~~

However, a more specific date string, referring to a specific month, should be labelled as [flat](https://universaldependencies.org/ga/dep/flat.html)

~~~ sdparse
I mí Mheán Fómhair 1940 \n In the month of September
nmod(mí, Mheán)
flat(Mheán, Fómhair)
flat(1940, Mheán)
~~~

### Numbers

We treat itemisation numbers as nmod: chapter <b>1</b>, article <b>(a)</b>

For example:

_<b>(a)</b> Ní bheidh feidhm ag fo-ailt <b>(1)</b> <b>(b)</b> agus <b>(2)</b>_ '<b>(a)</b> The sub-articles <b>(1)</b> <b>(b)</b> and <b>(2)</b> will have no purpose'

~~~ sdparse
(a) Ní bheidh feidhm ag fo-ailt (1) (b) agus (2) \n (a) Not will purpose have sub-paragraph (1) (b) and (2) 
nmod(bheidh, (a) )
nmod(fo-ailt, (1))
nmod(fo-ailt, (b))
nmod(fo-ailt, (2))
~~~

NOTE: We treat ordinal numbers as [amod](https://universaldependencies.org/ga/dep/amod.html) and cardinal numbers as [nummod](https://universaldependencies.org/ga/dep/nummod.html)
<!-- Interlanguage links updated Út zář 29 20:31:56 CEST 2020 -->
