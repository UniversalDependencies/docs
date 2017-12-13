---
layout: base
title:  'Syntax'
udver: '2'
---

# Specific constructions

## Clausal structures

In Armenian, the standard case pattern of a predicate-argument construction is as follows:

* the first argument (subject) is in the Nominative case;

* the second argument (direct object) is in the Nominative or Dative case;

* all other arguments are coded in other cases or in the prepositional phrase depending their semantics.

However, there is constructions which have non canonical case patterns.

### Ablative subject

The constructions are instantiated by a middle voice verb, the first argument of which is in the Ablative case with a partitive meaning and not in the canonical Nominative case. The Ablative argument is labeled [dep/iobj]().

~~~ sdparse
Հնչեցին երգերից ։ \n Sounded songs.Abl .
iobj(Հնչեցին, երգերից)
iobj(Sounded, songs.Abl)
~~~

## Adjectival and adverbial constructions

### Comparative constructions

Armenian qualitative adjectives and adverbs have only periphrastic comparative forms, most of them can have also a periphrastic superlative (see the [Degree]() feature), e. g. _խելացի_ “smart”, _ավելի խելացի_ “smarter”, _ամենախելացի_ “smartest”, _ամենից խելացի_, _բոլորից խելացի_ “smartest”. The morphological superlative forms are assigned the `Sup` [Degree]() feature.
Equality comparisons are also periphrastic.

The most frequently used comparative constructions are the following:

* _Արամը_.Nom _եղբորից_.Abl <b>_խելացի_</b> / <b>_ավելի խելացի_</b> / _է_ ։ “Aram is <b>smarter</b> than his brother.” (with both types of comparatives)
* _Արամը_.Nom <b>_ավելի խելացի_</b> _է_, _քան (թե) եղբայրը_.Nom։ “Aram is <b>smarter</b> than his brother.”
* _Արամը_.Nom _բոլոր_ _ուսանողներից_.Abl <b>_ամենից խելացին_</b> / <b>_ամենախելացին_</b> _է_ ։ “Aram is <b>the smartest one</b> of all the students.” (with both types of superlatives)
* _Արամը_.Nom _եղբոր_.Dat _պես / նման / չափ_.POST <b>_խելացի_</b> _է_ ։ “Aram is <b>smart</b> as his brother.” (equality comparison)

The “lesser degree” comparison (expressed periphrastically) is marked the same way:

* _Արամը_.Nom <b>_նվազ խելացի_</b> / <b>_պակաս խելացի_</b> _է_, _քան (թե) եղբայրը_.Nom։ “Aram is <b>less smart</b> than his brother.” (with both types of comparatives)

~~~ sdparse
Արամը եղբորից խելացի է ։ \n Aram is smart than-his-brother .
nmod(խելացի, եղբորից)
nmod(smart, than-his-brother)
~~~

~~~ sdparse
Արամը բոլոր ուսանողներից ամենախելացին է ։ \n Aram is the-smartest-one of-all the-students .
nmod(ամենախելացին, ուսանողներից)
nmod(the-smartest, the-students)
det(ուսանողներից, բոլոր)
det(the-students, of-all)
~~~

To keep the analyses of the morphological and the periphrastic cases parallel
(and also to keep the analyses parallel cross-linguistically),
in the periphrastic examples the entity comapared to modifies still the adjective and not the adverb:

~~~ sdparse
Արամը եղբորից ավելի խելացի է ։ \n Aram is more smart than-his-brother .
nmod(խելացի, եղբորից)
nmod(smart, than-his-brother)
advmod(խելացի, ավելի)
advmod(smart, is-more)
~~~

~~~ sdparse
Արամը ավելի խելացի է , քան եղբայրը ։ \n Aram is more smart , than his-brother .
nmod(խելացի, եղբայրը)
nmod(smart, his-brother)
case(եղբայրը, քան)
case(his-brother, than)
~~~

~~~ sdparse
Արամը բոլոր ուսանողներից ամենից խելացին է ։ \n Aram is the-most smartest-one of-all the-students .
nmod(խելացին, ուսանողներից)
nmod(smartest-one, the-students)
det(ուսանողներից, բոլոր)
det(the-students, of-all)
amod(խելացին, ամենից)
amod(smartest-one, the-most)
~~~

~~~ sdparse
Արամը եղբոր պես խելացի է ։ \n Aram is smart as his-brother .
nmod(խելացի, եղբոր)
nmod(smart, his-brother)
case(եղբոր, պես)
case(his-brother, as)
~~~

If a property is compared to a clause, the clause is attached as [advcl]() instead of [nmod]()
and the conjunction _(քան)_ is attached to the subordinate clause as [mark]().

~~~ sdparse
Արամը շատ ավելի խելացի է , քան թվում է ։ \n Aram is much more smart , than it seems .
advcl(խելացի, թվում)
advcl(smart, seems)
mark(թվում, քան)
mark(seems, than)
~~~

## Noun phrases with quantifiers

### Constructions with cardinal numerals

See [compound]() on the compound numerals: _հարյուր հիսունհինգ հազար_.

Other types of QP:

* _երկու.Nom ամբողջ.Gen.Sg չորս.Nom տասնորդական.Gen.Sg միլիոն.Gen.Sg դրամ.Gen.Pl_ “2.4 million drams” (i.e. “four tenth parts of million” with the ellipsis of “parts”)
* _հողամասի երկու երրորդ մասը_
* _ութ գլուխ ոչխար_
* _մեկ միլիոն բարել նավթ_

### Constructions of more and less quantity
