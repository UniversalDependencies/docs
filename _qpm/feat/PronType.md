---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

## PronType

This feature typically applies to [pronouns](../../u/pos/PRON), [determiners](../../upos/DET), pronominal [numerals](../../u/pos/NUM) (quantifiers)
 and pronominal [adverbs](../../u/pos/ADV).

In Pomak, the feature `PronType` is assigned to [PRON]() and [ADV](). 

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

#### Examples

Personal pronouns:
* _ja_ "εγώ", _ty_ "εσύ", _toj_ "αυτός", _tja_ "αυτή", _to_ "αυτό", _nýje_ "εμείς", _výje_ "εσείς", _tíje_ "αυτοί", _to_ "αυτές", _to_ "αυτά"
* _móne_ "εμένα", _tébe_ "εσένα", _tóga_ "αυτόν", _týje_ "αυτήν", _to_ "αυτό", _námi_ "εμάς", _vámi_ "εσάς", _tæh_ "αυτούς", _to_ "αυτές", _to_ "αυτά"
* _mí_ "μού", _tí_ "σού", _mú_ "τού", _jí_ "τής", _mú_ "τού", _nú_ "μάς", _vú_ "σάς", _mí_ "τούς"
* _mó_ "μέ", _tó_ "σέ", _go_ "τόν", _jé_ "τήν", _go_ "τό", _nú_ "μάς", _vú_ "σάς", _gi_ "τούς/τίς/τά"

Possessive pronouns:
* _moj_ "δικός μου", _tvoj_ "δικός σου", _tógav_ "δικός του", _tójin_ "δικός της", _tógav_ "δικός του", _naš_ "δικός μας", _vaš_ "δικός σας", _tǽhan_ "δικός τους"
* _mi_ "μου", _ti_ "σου", _mu_ "του", _ji_ "της", _mu_ "του", _nu_ "μας", _vu_ "σας", _mi_ "τους"
* <b><u>Σημείωση</u></b>: Το αυτό ισχύει και για τους έναρθρους τύπους των κτητικών αντωνυμιών.


<!--### <a name="Rcp">`Rcp`</a>: reciprocal pronoun

#### Examples

The feature `Rcp`.-->


### <a name="Int">`Int`</a>: interrogative pronoun, determiner, numeral or adverb

This category includes the interrogative pronouns and the interrogative adverbs.


#### Examples: 

* _kutrí_ "ποιος", _kakvóv_ "τί είδους / λογής / ποιότητας", _kólko_ "πόσος", _číjje_ "τίνος / ποιανού", _kač_ "πόσος"
* _kadé_ "πού", _kugá_ "πότε", _kak_ "πώς"

### <a name="Rel">`Rel`</a>: relative pronoun, determiner, numeral or adverb


#### Examples: 

* _žýjes / žýjet / žýjen_ "όποιος"
* _kutrísa / kutríta / kutrína_ "όποιος"
* _kakvóvsa / kakvóvta / kakvóvna_ "ό,τι είδους / λογής / ποιότητας"
* _kólkoso / kólkoto / kólkono_ "όσος"
* _číjjeso / číjjeto / číjjeno_ "οποιανού / οποιανής / οποιανών"
* _kadésa / kadéta / kadéna_ "όπου"
* _kugása / kugáta / kugána_ "όποτε"
* _káksa / kákta / kákna_ "όπως"

### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner, numeral or adverb


#### Examples

* _isazí / itazí / inazí_ "τούτος / αυτός / εκείνος"
* _isakvózen / itakvózen / inakvózen_ "τέτοιος"
* _itúzi / itúka / itám_ "εδώ / εκεί / πέρα"
* _isýj / itýj / inýj_ "έτσι"


### <a name="Tot">`Tot`</a>: total (collective) pronoun, determiner or adverb

<!--Ritvan are these pronouns or determiners?-->

The composite determiners and adverbs  formed by the particle `sǽ` and an interrogative pronoun or adverb respectively, e.g., _sǽ kutrí_ "ο καθένας", _sǽ kadé_ "παντού", are tagged as follows:
-the particle is assigned the feature `PartType=Tot
-the pronoun or the adverb are assigned the feature `PronType=Int` 
.

#### Examples

* _síčko / síčkoso / síčkoto / síčkono_ "όλα / τα πάντα"
* _vrit_ "όλος"
* _vrítsi_ "όλοι"
* _dájma_ "πάντα"

### <a name="Neg">`Neg`</a>: negative pronoun, determiner or adverb

<!--Ritvan are these pronouns or determiners?-->
#### Examples

* _ní kutrí_ "κανένας"
* _ní kadé_ "πουθενά"

The composite determiners and adverbs formed by the particle `ní` and an interrogative pronoun or adverb, e.g., ní kutrí_ "κανείς", _ní kadé_ "πουθενά", are tagged as follows:
-the particle is assigned the feature `PartType=Neg`
-the pronoun or the adverb are assigned the feature `PronType=Int` 

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner, numeral or adverb

<!--Ritvan are these pronouns or determiners?-->


The composite determiners and adverbs formed by the particles `nǽ / nó / jéta`  and an interrogative pronoun or adverb, e.g., nǽ kakvóv_ "κάποιου είδους / λογής / ποιότητας",
 _nó kutrí_ "κάποιος", _jéta kutrí_ "ο τάδε", _nǽ kak_ "κάπως", are tagged as follows:
-the particle is assigned the feature `PartType=Ind`
-the pronoun or the adverb are assigned the feature `PronType=Int` 

#### Examples

* _nǽko_ "κάτι"
* _nǽjde_ "κάπου"

* _badín_ "κάποιος"
* _bannóš_ "κάποτε"

<!-- Interlanguage links updated Pá kvě 14 11:08:39 CEST 2021 -->
