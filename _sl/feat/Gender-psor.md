---
layout: feature
title: 'Gender[psor]'
shortdef: 'possessor’s gender'
---

Possessive [pronouns](PRON) and [determiners](DET) may have two different genders: that of the possessed object (in agreement with the modifying noun, inflectional feature) and that of the possessor (inherent, lexical feature). The `Gender[psor]` feature denotes the possessor's gender.

### `Masc`: masculine possessor

#### Examples

* _<b>njegova</b> hčerka_ “his daughter” `Gender[psor]=Masc|Gender=Fem`

### `Fem`: feminine possessor

#### Examples

* _<b>njena</b> hčerka_ “her daughter” `Gender[psor]=Fem|Gender=Fem`

### `Neut`: neuter possessor

As possessor can also be a [neuter](Gender) noun, we also distinguish the neuter possessor gender. However, its word forms are identical to that of masculine possessor gender and can only be disambiguated within context.

#### Examples

* _Kupili smo novo letalo.`Gender=Neut`. Premer <b>njegovih</b> kril je 7 metrov._ "We bought a new airplane. Its wingspan is 7 meters." `Gender[psor]=Neut`
* _Kupili smo nov avto.`Gender=Masc`. Premer <b>njegovih</b> platišč je 15 col._ "We bought a new care. Its wheel radius is 15 inch.

### Conversion from JOS

All pronouns with feature Owner_gender=masculine are converted to `Gender[psor]=Masc`, all pronouns with Owner_gender=feminine are converted to `Gender[psor]=Fem` and all pronouns with Owner_gender=neuter are converted to `Gender[psor]=Neut`.

Note that JOS annotation scheme does not assign possessor's gender to possessive adjectives. For example, the possessive adjectival word form _sinova_ (son's) in _sinova mama_ "son's mother" is currently annotated with `Gender=Fem`, whereas it should be annotated with `Gender[psor]=Masc|Gender=Fem` in the future.


<!-- Interlanguage links updated Út zář 29 20:31:35 CEST 2020 -->
