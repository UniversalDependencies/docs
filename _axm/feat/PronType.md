---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Art">Art</a></td>
  <td><a href="#Dem">Dem</a></td>
  <td><a href="#Exc">Exc</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Int">Int</a></td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Poss">Poss</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Rcp">Rcp</a></td>
  <td><a href="#Rel">Rel</a></td>
  <td><a href="#Tot">Tot</a></td>
</tr>
</table>

This feature typically applies to [pronouns](PRON),
[determiners](DET) and pronominal [adverbs](ADV).

### <a name="Prs">`Prs`</a>: personal pronoun

See also the [Poss]() feature that distinguishes normal personal pronouns from possessives. Note that `Prs` also includes reflexive
personal/possessive pronouns (e.g. _իրեն / իր&nbsp;_ see the [Reflex]() feature).

#### Examples

* _ես/es_ “I”, _դու/dow_ “you”, _ինք/ink’_ “he/she”, _մեք/mek’_ “we”, _դուք/dowk’_ “you” (pl.), _իրենք/irenk’_ “they”
* _ինձ (ինձի, ինձիկ)/inj (inji, injik)_ “me”, _քեզ (քեզի, քեզիկ, քէ)/k’ez (k’ezi, k’ezik, k’ē)_ “you”, _իրեն/iren_ “him/her”, _մեզ (մեզի, մեզիկ)/mez (mezi, mezik)_ “us”, _ձեզ/jez_ “you”, _իրենց (իւրեանց, իւրենց)/irenc’ (iwreanc’, iwrenc’)_ “them”


### <a name="Poss">`Poss`</a>: possessive pronoun or determiner

In Middle Armenian, a separate nominal declension paradigm is formed from the genitive forms of personal pronouns. Consequently, a distinction is made between possessive determiners and possessive pronouns.

#### Examples

<b>Possessive personal determiners:</b>
*  _իմ/im_ “my”, _քո/ko_ “your”, _իւր (իր)/iwr (ir)_ “his/her/its”, _մեր/mer_ “our”, _ձեր/jer_ “your”, _իրենց (իրանց, իւրեանց, իւրենց)/irenc’ (iranc’, iwreanc’,  iwrenc’)_ “their”

<b>Possessive personal pronouns:</b>
 * _իմոյ/imoy_ “of mine”, _իմոյ, իմում/imoy, imowm_ “to mine”, _զիմ/zim_ “mine”, _յիմմէ/yimmē_ “from mine”, _իմով/imov_ “with mine”, _յիմոց/yimoc’_ “from those of mine”, _իմովք/imovk’_ “with those of mine”
 * _քոյին/k’oyin_ “of yours”, _ի քումէ/i k’owmē_ “from yours”, _ի քուոց/i k’owoc’_ “from those of yours” (pl.)
 * _իւրոյ/iwroy_ “of his/hers/its”, _իւրում/iwrowm_ “to his/hers/its”, _զիւր/ziwr_ “his/hers/its”, _ի յիւրոյն/i yiwroyn_ “from his/hers/its”, _իւրով/iwrov_ “with his/hers/its”, _իւրոց/iwroc’_ “to theirs”, _յիւրոց/yiwroc’_ “from theirs”, _իւրովք/iwrovk’_ “with theirs” 
 * _մերոյ/meroy_ “of ours” _մերում/merowm_ “to ours” _ի մերմէ/i mermē_ “from ours” _մերով/merov_ “with ours” _ի ձերմէ/i jermē_ “from yours”, _ձերովք/jerovk’_ “with those of yours”

  
### <a name="Int">`Int`</a>: interrogative pronoun, determiner or adverb

Note that possessive interrogative determiners (_whose_) can be distinguished by the [Poss]() feature. Interrogative determiners can be used as exclamatives with exclamation mark or stress.

#### Examples:

* _ո՞վ, ո՞վք/ov, ovk’_ “who?”, _ո՞ւմ/owm_ “whose?”
* _ո՞ր, ո՞րք/or, ork’_ “which?”
* _զի՞նչ/zinč_ “what?”

### <a name="Rel">`Rel`</a>: relative pronoun or determiner or adverb

All pronouns and determiners that mark the beginning of a [relative clause](acl:relcl) have this feature. Note that this class overlaps with interrogatives. There are no pronouns that are only relative.

#### Examples:

* _ով, ովք/ov, ovk’_ “who”, _ում/owm_ “whose”
* _որ, որք/or, ork’_ “which”
* _զինչ/zinč_ “what”


### <a name="Rcp">`Rcp`</a>: reciprocal pronoun

#### Examples

* _իրար (իրաց, իրերաց)/irar (irac’, irerac’)_ “one another”,
* _միմեանց/mimeanc’_ “each other”,
* _մեկզմեկ (մէկը մէկու, մէկմէկու, մէկմէկի)/mekzmek (mēkë mēkow, mēkmēkow, mēkmēki)_ “each other”


### <a name="Exc">`Exc`</a>: exclamative determiner

Exclamative pro-adjectives (determiners) express the speaker’s surprise towards
the modified noun. In Armenian exclamative determiners are recruited from the set of interrogative or demonstrative determiners.

#### Examples:

* սատանին բանն այլ _ի՜նչ_ է/satanin bann ayl inč ē “What else could the devil's work be!”

  
### <a name="Art">`Art`</a>: article

Article is a special case of determiner that bears the feature of
[definiteness](Definite). Note, that in Armenian `Def` value is marked directly on nouns.

See also the related features [Number[psor]]() and [Person[psor]]().

#### Examples

* _մի_ “a/an”


### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner or adverb

Note that in Middle Armenian there is a distinction between proximal or first person (objects near to the speaker), medial or second person (objects near to the addressee), and distal or third person (objects far from both) demonstratives. We distinguish also a separate feature of [Distance]().

#### Examples

* _սա/sa_ “this”, _դա/da_ “that (medial)”, _նա/na_ “that”,  _սոքա/sok’a_ “thеsе”, _դոքա/dok’a_ “thօse (medial)”, _նոքա (նաքա)/nok’a (nak’a)_ “that” “”
* _այս/ays_ “this”, _այդ/ayd_ “that (medial)”, _այն/ayn_ “that”, _այսոք (այսոնք)/aysok’ (aysonk’)_ “these”, _այդոք (այդոնք)/aydok’ (aydonk’)_ “those” (medial), _այնոք (այնոնք)/aynok’ (aynonk’)_ “those”
* _հանչաք/hančak’_ “this much, that much”
* _յայնժամ/yaynžam_ “at the time”
* _միւս/miws_ “(the) other”


### <a name="Emp">`Emp`</a>: emphatic pronoun or determiner

As emphatic pro-adjectives (determiners) emphasize the nominal they depend on. They are the same with the personal pronoun of the 3rd person and are also used as demonstrative, reflexive and possessive pronouns / determiners.

See also the [Number[psor]]() and [Person[psor]]() features for further details.

#### Examples

* _ինք_/_ink'_, _իրենք_/_irenk'_, _իր (իւր)_/_ir (iwr)_, _իրեն (իւրն)_/_iren (iwrn)_  “he (himself), they (themselves), his(him)/her” as in _զի այս թագաւորին է՝ որ <b>ինքն</b> դատէ_/__ “For this belongs to the King—that he judges (these cases) <b>himself</b>”.


### <a name="Tot">`Tot`</a>: total (collective) pronoun or determiner

#### Examples

* _ամէն_ “all”
* _ամեն մէկ_ “each, every”


### <a name="Neg">`Neg`</a>: negative pronoun or determiner

Negative pronominal words are distinguished from negating [particles](PART) and from words that inflect for polarity (verbs.) Those words do not use `PronType=Neg`, they use `Polarity=Neg` instead. See [Polarity]() and [Connegative]() for further details.

#### Examples

* _ոչ ով/oč ov_ “nobody”
* _ոչինչ/očinč_ “nothing”
* _ոչ որ/oč or_ “no one”


### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner or adverb

#### Examples

* _մարդ/mard_ “one/someone”
* _ոք/ok’_ “one/someone”
* _մէկ մի/mēk mi_ “one/any”
* _այլ/ayl_ “other”
* _մէկայլ/mēkayl_ “another”
* _միւս/miws_ “(the) other”

<!-- Interlanguage links updated St 12. listopadu 2025, 09:20:43 CET -->
