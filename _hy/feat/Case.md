---
layout: feature
title: 'Case'
shortdef: 'case'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Acc">Acc</a></td>
  <td><a href="#Abl">Abl</a></td>
  <td><a href="#Dat">Dat</a></td>
  <td><a href="#Gen">Gen</a></td>
  <td><a href="#Ins">Ins</a></td>
  <td><a href="#Loc">Loc</a></td>
  <td><a href="#Nom">Nom</a></td>
</tr>
</table>

Case is an inflectional feature of [nouns](NOUN) and [pronouns](PRON). It is also an inflectional feature of certain [adpositions](ADP) (and not a valency feature indicating that the adposition requires its argument to be in a particular case).

Case helps specify the role of the noun phrase in the sentence.

Here on the level of morphosyntactic features we are dealing with case expressed morphologically, i.e. by bound morphemes (affixes). The descriptions of the individual case values below include semantic hints about the prototypical meaning of the case. Bear in mind that quite often a case will be used for a meaning that is totally unrelated to the meaning mentioned here. Valency of verbs, adpositions and other words will determine that the noun phrase must be in a particular grammatical case to fill a particular valency slot (semantic role).

Armenian linguistics distinguishes between five (morphological) and seven (syntactic) cases: `Nom`, `Gen`, `Dat`, `Acc`, `Abl`, `Ins` and `Loc` (this ordering is fixed in the grammar).

Note that the direct object of the verb can be formed in nominative or dative (syntactic accusative), this is related to [Animacy](). They will be tagged `Case=Nom` and `Case=Dat` and not `Case=Nom,Acc` or `Case=Gen,Dat` as in some Armenian grammars.

The difference between `Gen` and `Dat` is related to [definiteness](Definite). The `Gen` cannot have `Definite=Def`.

Note also that vocatives and noun modifiers in nominative or as a genitive complement in genitive cannot have `Definite=Def`. In these cases we declare `Definite=Ind`. Only this value will have also `Ins`, `Abl` and `Loc` cases.

Personal and some demonstrative pronouns distinguish between `Case=Gen` and `Case=Dat`. In genitive they will have `Poss=Yes`.

#### Examples

* singular nominative _դպրոց_/_dproc’_ “school”, dative _դպրոցի(ն)_/_dproc’i(n)_, ablative _դպրոցից_/_dproc’ic’_, instrumental _դպրոցով_/_dproc’ov_, locative _դպրոցում_/_dproc’owm_
* singular nominative _ժամանակ_/_žamanak_ “time”, dative _ժամանակի(ն)_/_žamanaki(n)_, _ժամանակվա(ն)_/_žamanakva(n)_, ablative _ժամանակից, ժամանակվանից_/_žamanakic’, žamanakvanic’_, instrumental _ժամանակով_/_žamanakov_, locative _ժամանակում_/_žamanakowm_
* singular nominative _արյուն_/_aryown_ “blood”, dative _արյան(ը)_/_aryan(ë)_, ablative _արյունից_/_aryownic’_, instrumental _արյունով, արյամբ_/_aryownov, aryamb_
* singular nominative _մայր_/_mayr_ “mother”, dative _մոր(ը)_/_mor(ë)_, ablative _մորից_/_moric’_, instrumental _մորով_/_morov_


### <a name="Nom">`Nom`</a>: nominative

The base form of the noun, also used as citation form (lemma).
In Armenian this is the word form used for subjects of clauses, for direct objects of verbs and for addressing someone.

#### Examples

* _դպրոց_/_dproc’_ “school”


### <a name="Gen">`Gen`</a>: genitive

In many languages, the prototypical meaning of the genitive is that the noun phrase somehow belongs to its governor.

We recognize genitive only for possessive personal pronouns, certain demonstrative pronouns/determiners, and _իր_/_ir_ “one’s own”.

#### Examples

* _իր_/_ir_ “one’s own”


### <a name="Dat">`Dat`</a>: dative

This is the word form often used for indirect objects of verbs.

In Armenian, this form is also used for cases when the noun phrase somehow belongs to its governor (adnominal dative) or depends on the verb (adverbal dative), see above.

#### Examples

* _պատվերներ պետք է տալ <b>նորոգողներին</b>_/_patverner petk’ ē tal <b>norogoġnerin</b>_ “orders should be give to the repairmen” (_նորոգողներին_ “repairmen” is dative and _պատվերներ_ “orders” is nominative),
* _Երևանը <b>Հայաստանի</b> մայրաքաղաքն է։_/_Erewanë <b>Hayastani</b> mayrak’aġak’n ē_ “Yerevan is the capital <b>of Armenia</b>.”


### <a name="Acc">`Acc`</a>: accusative

Although accusative is one of the most widespread morphological cases cross-linguistically, we do not distinguish a separate morphological accusative. Direct objects are expressed by nominative or dative forms (see above).

#### Examples

* _այդպիսի <b>բաներ</b> շատ են սիրում_/_aydpisi <b>baner</b> šat en sirowm_ “(they) like such <b>things</b> very much”
* _Եղբայրս սիրում է <b>Աննային</b>։_/_Eġbayrs sirowm ē <b>Annayin</b>_ “My brother loves <b>Anna</b>.”


### <a name="Abl">`Abl`</a>: ablative

Prototypical meaning: direction from some point (object, location or time).

#### Examples

* _սեղանից_/_seġanic’_ "from the table"
* _ծովափից_/_çovap’ic’_ "from the beach"
* _ամառվանից_/_amaṙvanic’_ "from the summer"


### <a name="Ins">`Ins`</a>: instrumental

The role from which the name of the instrumental case is derived is that the noun is used as instrument to do something (as in _գրել<b>գրիչով</b>_/_grel<b>gričov</b>_ “to write <b>with a pen</b>”).
Many other meanings are possible, for example the instrumental is required and it includes the meaning expressed in other languages by adverbs of manner.

In Armenian the instrumental is also used for the agent-object in passive constructions (cf. the English preposition _by, with_).

#### Examples

* _Օրինագիծը <b>դժվարությամբ</b> հաստատվեց։_/_Òrinagiçë <b>džvarowt’yamb</b> hastatvec’։_ “The bill was approved <b>with difficulty</b>.”
* _Գետնինը ծածկվեց <b>ձյունով</b>։_/_Getninë çaçkvec’ <b>jyownov</b>։_ “The earth has been covered <b>with snow</b>.” (Passive example)


### <a name="Loc">`Loc`</a>: locative

The locative case often expresses location in space or time, which gave it its name. As elsewhere, non-locational meanings also exist and they are not rare. On the other hand, some location roles
may be expressed using other cases (e.g. because those cases are required by a preposition).

#### Examples

* _Նա 7-10 օր անցկացնելու է <b>Հայաստանում</b>։_/_Na 7-10 òr anc’kac’nelow ē <b>Hayastanowm</b>։_ “He/She will spend 7-10 days <b>in Armenia</b>.”
* _փլվեց տասը <b>օրում</b>_/_p’lvec’ tasë <b>òrowm</b>_ “it collapsed <b>in ten days</b>”
<!-- Interlanguage links updated Út 30. června 2026, 10:58:44 CEST -->
