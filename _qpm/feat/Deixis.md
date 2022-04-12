---
layout: feature
title: 'Deixis'
shortdef: 'relative location encoded in demonstratives'
udver: '2'
---

<!-- https://github.com/UniversalDependencies/docs/issues/592 -->
<!-- see also Unimorph -->

## Deixis

Deixis is typically a feature of demonstrative [pronouns](../../u/pos/PRON), [determiners](../../u/pos/DET), and [adverbs](../../u/pos/ADV).
Its value classifies the location of the referred entity with respect to the location of the speaker or of the hearer. The common distinction is distance (proximate vs. remote entities); in some languages, elevation is distinguished as well (e.g., the entity is located higher or lower than the speaker).

If it is necessary to distinguish the person whose location is the reference point (speaker or hearer), the feature [DeixisRef](DeixisRef.html) can be used in addition to `Deixis`. See also the Wolof examples below. [DeixisRef](DeixisRef.html) is not needed if all deictic expressions in the language are relative to the same person (probably the speaker).

Η Πομακική χρησιμοποιεί το feature `Deixis` σε συνδυασμό με το feature [DeixisRef](DeixisRef.html) για τη σήμανση του τριπλού οριστικού άρθρου.

### <a name="Prox">`Prox`</a>: proximate

The entity is close to the reference point (e.g., to the speaker).

#### Examples

* [qpm] _górm<b>os</b>_ "το δέντρο (εδώ κοντά σ' εμένα ή το ίδιο κοντά στον ομιλητή και τον ακροατή)"
`Deixis=Prox|DeixisRef=1`
* [qpm] _górm<b>ot</b>_ "το δέντρο (εκεί κοντά σ' εσένα)"
`Deixis=Prox|DeixisRef=2`


### <a name="Remt">`Remt`</a>: remote, distal

The entity is far away from the reference point (e.g., from the speaker).

#### Examples

* [qpm] _górm<b>on</b>_ "το δέντρο (εκεί μακριά και από τον ομιλητή και από τον ακροατή)"
`Deixis=Remt|DeixisRef=3`
<!-- ΡΙΤΒΑΝ ΠΡΟΣ ΣΤΕΛΛΑ:
Το '|DeixisRef=3' καταργείται από την περίπτωση 'Remt'
Διόρθωσε τα αρχεία σου
-->

<!-- Interlanguage links updated Pá kvě 14 11:08:31 CEST 2021 -->
