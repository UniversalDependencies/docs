---
layout: relation
title: 'punct'
shortdef: 'punctuation'
udver: '2'
---


This is used for any piece of punctuation in a clause, regardless of its function. The punctuation mark is attached to the head of the phrase or clause to which it belongs unless this introduces a non-projective dependency. More discussion on punctuation can be found on the universal dependency page ([u-dep/punct]()).

### Example

_<b>'</b>Tá an méid sin suimiúil a d' inis tú dom <b>,</b> <b>'</b> a dúirt sé <b>.</b>_ <b>'</b>What you have told me is interesting <b>,</b><b>'</b> he said to me<b>.</b>'

~~~ sdparse
' Tá an méid sin suimiúil a d' inis tú dom , ' a dúirt sé . \n ' Is the amount DEM interesting [] [] told you to_me , ' [] said he .
punct(dúirt, ')
punct(dúirt, ,)
punct(dúirt, ')
punct(dúirt, .)
~~~

NOTE: Punctuation included in embedded clauses are are dependent on the head of the noun phrase in which they occur. See the examples below. 

_Éireoidh beirt chomhalta den Bhord <b>(</b> seachas an cathaoirleach agus an príomhoifigeach feidhmiúcháin <b>)</b> as oifig <b>.</b>_ Two members of the Board <b>(</b>apart from the chairperson and the chief executive officer<b>)</b> will resign<b>.</b>

~~~ sdparse
Éireoidh beirt chomhalta den Bhord ( seachas an cathaoirleach agus an príomhoifigeach feidhmiúcháin ) as oifig . \n ' 'Will_rise two_persons member of_the Board (except the chairperson and the chief_officer executive) from office'
punct(cathaoirleach, ()
punct(cathaoirleach, ))
punct(Éireoidh, .)
~~~

_Ach meastar gur ar chroí-lár thaca Ian Paisley <b>-</b> an Baile Meánach <b>-</b> a bhronnfar an gradam_ 'But it is thought that the award will go to the heartland of Ian Paisley's support <b>-</b> Ballymena'
~~~ sdparse
Ach meastar gur ar chroí-lár thaca Ian Paisley - an Baile Meánach -- a bhronnfar an gradam \n But is_thought that on_the heart-centre of_support Ian Paisley - Ballymena - that will_be_presented the award.
punct(Baile, -)
punct(Baile, --)
~~~
<!-- Interlanguage links updated Út zář 29 18:41:35 CEST 2020 -->
