---
layout: feature
title: 'Case'
shortdef: 'case'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Abl">Abl</a></td>
  <td><a href="#Dat">Dat</a></td>
  <td><a href="#Gen">Gen</a></td>
  <td><a href="#Ins">Ins</a></td>
  <td><a href="#Loc">Loc</a></td>
  <td><a href="#Nom">Nom</a></td>
</tr>
</table>

Case is an inflectional feature of [nouns](NOUN) and
[pronouns](PRON). It is also inflectional feature of some [adpositions](ADP) (ant not valency feature saying that
the adposition requires its argument to be in that case).

Case helps to specify the role of the noun phrase in the sentence.

Here on the level of morphosyntactic features we are dealing with case expressed morphologically, i.e. by bound morphemes (affixes).  The descriptions of the individual case values below include semantic
hints about the prototypical meaning of the case. Bear in mind that
quite often a case will be used for a meaning that is totally
unrelated to the meaning mentioned here. Valency of verbs,
adpositions and other words will determine that the noun phrase must
be in a particular grammatical case to fill a particular valency slot
(semantic role).

Armenian linguistics distinguishes between five (morphological) and seven (syntactic) cases:
`Nom`, `Gen`, `Dat`, `Acc`, `Abl`, `Ins` and `Loc` (this ordering is fixed in the grammar).

Note, that the direct object of the verb can be formed in nominative or dative (syntactic accusative), this is related to [Animacy](). They will be tagged `Case=Nom` and `Case=Dat` and not `Case=Nom,Acc` or `Case=Gen,Dat` as in some Armenian grammars.

The difference between `Gen` and `Dat` is related to [definiteness](Definite). The `Gen` can not have `Definite=Def`.

Note also, that vocatives, and noun modifiers as an attribute in nominative or as a genitive complement in genitive can not have `Definite=Def`. In these cases we declare `Definite=Ind`. Only this value will have also `Ins`, `Abl` and `Loc` cases.

Personal and some demonstrative pronouns distinguish between `Case=Gen` and `Case=Dat`. In genitive they will have `Poss=Yes`.

#### Examples

* singular nominative _դպրոց&nbsp;_ “school”, dative _դպրոցի(ն),&nbsp;_ ablativ _դպրոցից,&nbsp;_ instrumental _դպրոցով,&nbsp;_ locative _դպրոցում_
* singular nominative _ժամանակ&nbsp;_ “time”, dative _ժամանակի(ն), ժամանակվա(ն),&nbsp;_ ablativ _ժամանակից, ժամանակվանից,&nbsp;_ instrumental _ժամանակով,&nbsp;_ locative _ժամանակում_
* singular nominative _արյուն&nbsp;_ “blood”, dative _արյան(ը),&nbsp;_ ablativ _արյունից,&nbsp;_ instrumental _արյունով, արյամբ&nbsp;_
* singular nominative _մայր&nbsp;_ “mother”, dative _մոր(ը),&nbsp;_ ablativ _մորից,&nbsp;_ instrumental _մորով_

### <a name="Nom">`Nom`</a>: nominative

The base form of the noun, also used as citation form (lemma).
In Armenian this is the word form used for subjects of clauses, for direct objects of verbs and for addressing someone. 

### <a name="Gen">`Gen`</a>: genitive

In many languages prototypical meaning of genitive is that the noun phrase somehow
belongs to its governor.

We not recognizing the genitive except for possessive personal, some demonstrative pronouns/determiners and _իր&nbsp;_ “one’s own”.

### <a name="Dat">`Dat`</a>: dative

This is the word form often used for indirect objects of verbs.

In Armenian this form is used also for cases when the noun phrase somehow
belongs to its governor (adnominal dative) or depends on the verb (adverbal dative), see above.

#### Examples

* _Ես <b>եղբորս</b> նվեր տվեցի։&nbsp;_ “I gave my brother a present.”
  (_եղբորս&nbsp;_ “my brother” is dative and _նվեր&nbsp;_ “present” is nominative.)
* _Երևանը <b>Հայաստանի</b> մայրաքաղաքն է։&nbsp;_ “Yerevan is the
  capital <b>of Armenia</b>.”

### <a name="Abl">`Abl`</a>: ablative

Prototypical meaning: direction from some point (object, location or time).

#### Examples

* _սեղանից&nbsp;_ "from the table"
* _ծովափից&nbsp;_ "from the beach"
* _ամառվանից&nbsp;_ "from the summer"

### <a name="Ins">`Ins`</a>: instrumental

The role from which the name of the instrumental case is derived is
that the noun is used as instrument to do something (as in _գրել
<b>գրիչով</b>&nbsp;_ “to write <b>using a pen</b>”). Many other meanings are
possible, for example the instrumental is required and it includes the meaning expressed in
other languages by adverbs of manner.

In Armenian the instrumental is also used for the agent-object in passive
constructions (cf. the English preposition _by_).

#### Examples

* _Օրինագիծը <b>դժվարությամբ</b> հաստատվեց։&nbsp;_ “This bill was approved <b>with difficulty</b>.”
* _Գետնինը ծածկվեց <b>ձյունով</b>։&nbsp;_ “The earth has been covered <b>by snow</b>.” (Passive example)

### <a name="Loc">`Loc`</a>: locative

The locative case often expresses location in space or time, which
gave it its name. As elsewhere, non-locational meanings also exist and
they are not rare. On the other hand, some location roles
may be expressed using other cases (e.g. because those cases are
required by a preposition).

#### Examples

* _Հուլիսին ես <b>Շվեդիայում</b> էի։&nbsp;_ “In July I was in <b>Sweden</b>.”
* _Մի <b>ժամում</b> հասավ։&nbsp;_ “lit: He got there in an <b>hour</b>.”
<!-- Interlanguage links updated Út zář 29 18:40:51 CEST 2020 -->
