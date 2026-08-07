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
  <td><a href="#Emp">Emp</a></td>
  <td><a href="#Exc">Exc</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Int">Int</a></td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Rcp">Rcp</a></td>
  <td><a href="#Rel">Rel</a></td>
  <td><a href="#Tot">Tot</a></td>
</tr>
</table>

This feature typically applies to [pronouns](PRON), [determiners](DET), and pronominal [adverbs](ADV).

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

See also the [Poss]() feature that distinguishes personal pronouns from possessives. Note that `Prs` also includes emphatic personal/possessive pronouns (e.g. _իր_/_ir_ “one's own”, _իրենց_/_irencʼ_ “their own”, see also the [Reflex]() feature).

#### Examples

* _ես_/_es_ “I”, _դուն_/_down_ “you”, _ան_/_an_ “he/she/it”, _մենք_/_menk’_ “we”, _դուք_/_dowk’_ “you”, _անոնք_/_anonk’_ “they”
* _իմ_/_im_ “my”, _քո_/_kʼo_ “your”, _նրա_/_nra_ “his/her/its”, _մեր_/_mer_ “our”, _ձեր_/_jer_ “your”, _նրանց_/_nrancʼ_ “their”
* _ինձ_/_inj_ “me, myself”, _քեզ_/_kʼez_ “you, yourself”,  _նրան_/_nran_ “him/her/it”, _իրեն_/_iren_ “one, oneself”, _մեզ_/_mez_ “us, ourselves”, _ձեզ_/_jez_ “you, yourselves”, _նրանց_/_nrancʼ_ “them”, _իրենց_/_irencʼ_ “them, themselves”
* _իր_/_ir_ “one's own”, _իրենց_/_irencʼ_ “their own”

### <a name="Int">`Int`</a>: interrogative pronoun, determiner or adverb

Note that interrogative determiners can be used as exclamatives with exclamation mark or stress (see below).

#### Examples:

* _ո՞վ_/_o?v_, _ովքե՞ր_/_ovkʼe?r_ “who?”, _ո՞ւմ_/_o?wm_ “whose?”
* _ի՞նչ_/_i?nč_ “what?”, _ինչպիսի՞(ք)_/_inčpisi?(kʼ)_ “what kind of?”, _ինչքա՞ն_/_inčkʼa?n_ “how many?”, _ինչչա՞փ_/_inčča?pʼ_ “how much?”, _ինչպե՞ս_/_inčpe?s_ “how?”
* _ո՞ր_/_o?r_, _որո՞նք_/_oro?nkʼ_ “which?”, _որպիսի՞(ք)_/_orpisi?(kʼ)_ “what kind of?”, _որքա՞ն_/_orkʼa?n_ “how many?”, _որչա՞փ_/_orča?pʼ_ “how much?”, _ո՞րերորդ_/_o?rerord_ “what number?” (ordinal quantifier)
* _քանի՞_/_kʼani?_ “how many?”, _քանի՞սը_/_kʼani?së_ “how many?”, _քանի՞երորդ_/_kʼani?erord_ “what number?” (ordinal quantifier)
* _որտե՞ղ_/_orte?ġ_ “where?”, _ո՞ւր_/_o?wr_ “where to?”
* _ե՞րբ_/_e?rb_ “when?”
* _ինչո՞ւ_/_inčo?w_ “why?”

### <a name="Rel">`Rel`</a>: relative pronoun or determiner or adverb

All pronouns, determiners, and pronominal adverbs that mark the beginning of a [relative clause](acl:relcl) have this feature. Note that this class overlaps with interrogatives. There are no pronouns that are only relative.

#### Examples:

* _ով_/_ov_ “who”
* _որ_/_or_ “that, which”
* _ինչ_/_inč_ “what”
* _որտեղ_/_orteġ_ “where”
* _ուր_/_owr_ “where”
* _երբ_/_erb_ “when”

### <a name="Exc">`Exc`</a>: exclamative determiner

Exclamative pronouns (determiners) express the speaker’s surprise or strong reaction with respect to the modified nominal. In Armenian, exclamative determiners are recruited from the set of interrogative or demonstrative determiners.

#### Examples:

* _ի՜նչ բերք կստացվեր_/_i!nč berkʼ kstacʼver_ “what a harvest there would have been!”
* _այնքա՜ն շատ_/_aynkʼa!n šat_ “so many / so much!”

### <a name="Rcp">`Rcp`</a>: reciprocal pronoun

#### Examples

* _մեկմեկու (մեկմեկի)_/_mekmekow (mekmeki)_ “one another”, _իրար (իրարու)_/_irar (irarow)_ “each other”, _միմյանց_/_mimyancʼ_ “each other”

### <a name="Art">`Art`</a>: article

An article is a special type of determiner that bears the feature of [definiteness](Definite). Note that in Armenian, `Def` value is marked directly on nouns.

See also the related features [Number[psor]]() and [Person[psor]]().

#### Examples

* _մի_/_mi_ “a/an”

### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner or adverb

Note that Armenian distinguishes proximal (near the speaker), medial (near the addressee), and distal (far from both) demonstratives. These distinctions are encoded using the feature [Deixis]().

#### Examples

* _սա_/_sa_ “this”, _դա_/_da_ “that (medial)”, _նա_/_na_ “that”
* _այս_/_ays_, _այդ_/_ayd_, _այն_/_ayn_ “this, that (medial), that”
* _սույն_/_sowyn_ “this”, _նույն_/_nowyn_ “same”, _միևնույն_/_miewnowyn_ “same one”
* _այսպիսի_/_ayspisi_ “such”, _այդպիսի_/_aydpisi_ “such (medial)”, _այնպիսի_/_aynpisi_ “such (distal)”, _նույնպիսի_/_nowynpisi_ “same”
* _այսպես_/_ayspes_ “this way”, _այդպես_/_aydpes_ “that way (medial)”, _այնպես_/_aynpes_ “that way (distal)”, _նույնպես_/_nowynpes_ “same way”
* _այսքան_/_ayskʼan_ “this many”, _այդքան_/_aydkʼan_ “that many”, _այնքան_/_aynkʼan_ “so many”
* _այսչափ_/_aysčapʼ_ “this much”, _այդչափ_/_aydčapʼ_ “that much”, _այնչափ_/_aynčapʼ_ “so much”
* _այստեղ_/_aysteġ_ “here”, _այդտեղ_/_aydteġ_ “there (medial)”, _այնտեղ_/_aynteġ_ “there”
* _մյուս_/_myows_ “another”

### <a name="Emp">`Emp`</a>: emphatic pronoun or determiner

Emphatic pronouns (determiners) emphasize the nominal they depend on. There are similarities with personal, demonstrative, emphatic and possessive pronouns / determiners.

See also the [Number[psor]]() and [Person[psor]]() features for further details.

#### Examples

* _ինքը, ինքները / իրենք_/_inkʼë, inkʼnerë / irenkʼ_ “(he) himself, (they) themselves”, as in _պապը <b>ինքն</b> է ընտրել_/_papë <b>inkʼn</b> ē ëntrel_ “grandfather chose it <b>himself</b>”

### <a name="Tot">`Tot`</a>: total (collective) pronoun or determiner

#### Examples

* _ամեն(ը)_/_amen(ë)_ “every, all (of things)”
* _բոլոր(ը)_/_bolor(ë)_ “all (of people)”
* _յուրաքանչյուր(ը)_/ _yowrakʼančyowr(ë)_ “each (one)”
* _ողջ(ը)_/_oġǰ(ë)_ “whole”
* _ամբողջ(ը)_/_amboġǰ(ë)_ “all”
* _համայն_/_hamayn_ “all, whole”
* _ամենայն_/_amenayn_ “all, every”

### <a name="Neg">`Neg`</a>: negative pronoun or determiner

Negative pronominal words are distinguished from negating [particles](PART) and from words that inflect for polarity (verbs). Those words do not use `PronType=Neg`; they use `Polarity=Neg` instead. See [Polarity]() and [Connegative]() for further details.

#### Examples

* _ոչ ոք_/_oč okʼ_ “nobody”
* _ոչինչ_/_očinč_ “nothing”
* _ոչ մեկը_/_oč mekë_ “no one”
* _ոչ մի_/_oč mi_ “no”

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner or adverb

#### Examples

* _ինչ-որ_/_inč-or_ “some (of one thing)”, _ինչ-ինչ_/_inč-inč_ “some (of many things)”
* _մի քանի_/_mi kʼani_ “several”, _մի քանիսը_/_mi kʼanisë_ “some of”, _որոշ_/_oroš_ “certain”
* _մեկը_/_mekë_ “one”, _մեկնումեկը_/_meknowmekë_ “someone”, _մի_/_mi_ “some, several”
* _ոմն_/_omn_ “someone”, _ոմանք_/_omankʼ_ “some people”
* _ուրիշ_/_owriš_ “another”, _ուրիշը_/_owrišë_ “another one”, _այլ_/_ayl_ “other”
* _որևէ, որևիցե_/_orewē, orewicʼe_ “one or another”
* _այսինչ, այնինչ_/_aysinč, ayninč_ “this and that”
* _երբևէ, երբևիցե_/_erbewē, erbewicʼe_ “sometime”
<!-- Interlanguage links updated Út 30. června 2026, 10:59:14 CEST -->
