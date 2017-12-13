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

Armenian qualitative adjectives and adverbs have periphrastic comparative forms, most of them can have also a periphrastic superlative (see the [Degree]() feature), e. g. _խելացի_ “smart”, _ավելի խելացի_ “smarter”, _ամենախելացի_ “smartest”, _ամենից խելացի_, _բոլորից խելացի_ “smartest”. The morphological superlative forms are assigned the `Sup` [Degree]() feature.
Equality comparisons are also periphrastic.

The most frequently used comparative constructions are the following:

* _Արամը_.Nom _եղբորից_.Abl <b>_խելացի_</b> / <b>_ավելի խելացի_</b> / _է_ ։ “Aram is <b>smarter</b> than his brother.”

(with both types of comparatives)

* _Արամը_.Nom <b>_ավելի խելացի_</b> _է_, _քան (թե) եղբայրը_.Nom։ “Aram is <b>smarter</b> than his brother.”
* _Արամը_.Nom <b>_самый умный_</b> / <b>_умнейший_</b> _из_.PREP _всех_.Gen. “Misha is <b>the smartest</b> of them all.” (with both types of superlatives)
* _Миша_.Nom <b>_такой же умный_</b> / <b>_так же умен_</b> / <b>_столь же умен_</b>, _как_ (_и_) _его брат_.Nom. “Misha is <b>as smart</b> as his brother.” (equality comparison)

The “lesser degree” comparison (expressed periphrastically) is marked the same way:

* _Արամը_.Nom <b>_նվազ խելացի_</b> / <b>_պակաս խելացի_</b> _է_, _քան (թե) եղբայրը_.Nom։ “Aram is <b>less smart</b> than his brother.” (with both types of comparatives)

* _Миша_.Nom <b>_наименее глупый_</b> _из_.PREP _всех_.Gen. “Misha is <b>the least stupid</b> of them all.” (with both types of superlatives)

~~~ sdparse
Արամը եղբորից խելացի է ։ \n Aram is smarter than-his-brother .
nmod(խելացի, եղբորից)
nmod(smarter, than-his-brother)
~~~

~~~ sdparse
Արամը ավելի խելացի է , քան եղբայրը ։ \n Aram is more smarter , than his-brother .
nmod(խելացի, եղբայրը)
nmod(smarter, his-brother)
case(եղբայրը, քան)
case(his-brother, than)
~~~

~~~ sdparse
Миша более опасен , чем Ваня . \n Misha is-more dangerous , than Vanya .
nmod(опасен, Ваня)
nmod(dangerous, Vanya)
case(Ваня, чем)
case(Vanya, than)
advmod(опасен, более)
advmod(dangerous, is-more)
~~~

~~~ sdparse
Миша самый умный из всех . \n Misha is-the-most smart of them-all .
nmod(умный, всех)
nmod(smart, them-all)
case(всех, из)
case(them-all, of)
amod(умный, самый)
amod(smart, is-the-most)
~~~

~~~ sdparse
Миша так же умен , как и его брат . \n Misha so then smart , as his brother .
nmod(умен, брат)
nmod(smart, brother)
case(брат, как)
case(brother, as)
advmod(умен, так)
advmod(smart, so)
fixed(так, же)
fixed(so, then)
~~~

~~~ sdparse
Миша умнее , чем хочет казаться . \n Misha is-smarter , than he-wants to-appear .
advcl(умнее, хочет)
advcl(is-smarter, he-wants)
mark(хочет, чем)
mark(he-wants, than)
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
