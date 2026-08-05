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

See also the [Poss]() feature that distinguishes personal pronouns from possessives. Note that `Prs` also includes emphatic personal/possessive pronouns (e.g. _իր_/_ir_ “one's own”, _իրենց_/_irencʼ_ “their own”, see the[Reflex]() feature).

#### Examples

* _ես, դու, նա, մենք, դուք, նրանք_ “I, you, he/she/it, we, you, they”
* _իմ, քո, նրա, մեր, ձեր, նրանց_ “my, your, his/her/its, our, your, their”
* _ինձ, քեզ, իրեն, մեզ, ձեզ, իրենց_ “myself, yourself, oneself, ourselves, yourselves, themselves”
* _իր, իրենց_ “one's own, their own”

### <a name="Int">`Int`</a>: interrogative pronoun, determiner or adverb

Note that possessive interrogative determiners (_whose_) can be distinguished by the [Poss]() feature. Interrogative determiners can be used as exclamatives with exclamation mark or stress.

#### Examples:

* _ո՞վ, ովքե՞ր_ “who”, _ո՞ւմ_ “whose”
* _ի՞նչ_ “what”, _ինչպիսի՞(ք)_ “what kind of”, _ինչքա՞ն_ “how many”, _ինչչա՞փ_ “how much”, _ինչպե՞ս_ “how”
* _ո՞ր, որո՞նք_ “which”, _որպիսի՞(ք)_ “which kind of”, _որքա՞ն_ “how many”, _որչա՞փ_ “how much”, _ո՞րերորդ_ “what number” (ordinal quantifier)
* _քանի՞_ “how many”, _քանի՞սը_ “how many”, _քանի՞երորդ_ “what number” (ordinal quantifier)
* _որտե՞ղ_ “where”, _ո՞ւր_ “where to”
* _ե՞րբ_ “when”
* _ինչո՞ւ_ “why”

### <a name="Rel">`Rel`</a>: relative pronoun or determiner or adverb

All pronouns and determiners that mark the beginning of a [relative clause](acl:relcl) have this feature. Note that this class overlaps with interrogatives. There are no pronouns that are only relative.

#### Examples:

* _ո՞վ, ովքե՞ր_ “who”, _ո՞ւմ_ “whose”

### <a name="Exc">`Exc`</a>: exclamative determiner

Exclamative pro-adjectives (determiners) express the speaker’s surprise towards
the modified noun. In Armenian exclamative determiners are recruited from the set of interrogative or demonstrative determiners.

#### Examples:

* _Ինչպիսի՜ անակնկալ։_ “What a surprise!”
* _Այդքա՜ն գեղեցիկ։_ “So beautiful!”

### <a name="Rcp">`Rcp`</a>: reciprocal pronoun

#### Examples

* _մեկմեկու (մեկմեկի), իրար (իրարու), միմյանց&nbsp;_ “one another, each other, each other”

### <a name="Art">`Art`</a>: article

Article is a special case of determiner that bears the feature of
[definiteness](Definite). Note, that in Armenian `Def` value is marked directly on nouns.

See also the related features [Number[psor]]() and [Person[psor]]().

#### Examples

* _մի&nbsp;_ “a/an”

### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner or adverb

Note that Armenian makes a distinction between proximal or first person (objects near to the speaker), medial or second person (objects near to the addressee), and distal or third person (objects far from both) demonstratives. We distinguish also a separate feature of [Distance]().

#### Examples

* _սա, դա, նա_ “this, that (medial), that”
* _այս, այդ, այն_ “this, that (medial), that”
* _սույն, նույն, միևնույն_ “this, same, same one”
* _այսպիսի, այդպիսի, այնպիսի, նույնպիսի_ “such, such (medial), such (distal), same”
* _այսպես, այդպես, այնպես, նույնպես_ “this way, that way (medial), that way, same way”
* _այսքան, այդքան, այնքան_ “this many, that many, so many”
* _այսչափ, այդչափ, այնչափ_ “this much, that much, so much”
* _այստեղ, այդտեղ, այնտեղ_ “here, there (medial), there”
* _մյուս_ “another”

### <a name="Emp">`Emp`</a>: emphatic pronoun or determiner

As emphatic pro-adjectives (determiners) emphasize the nominal they depend on. There are similarities with personal, demonstrative, reflexive and possessive pronouns / determiners.

See also the [Number[psor]]() and [Person[psor]]() features for further details.

#### Examples

* _ինքը, ինքները / իրենք_ “(he) himself, (they) themselves” as in _Նախագահն <b>ինքը</b> եկավ դա տեսնելու։_ “President <b>himself</b> came to see it.”

### <a name="Tot">`Tot`</a>: total (collective) pronoun or determiner

#### Examples

* _ամեն(ը)&nbsp;_ “every, all (of things)”
* _բոլոր(ը)&nbsp;_ “all (of people)”
* _յուրաքանչյուր(ը)&nbsp;_ “each (one)”
* _ողջ(ը) &nbsp;_ “whole”
* _ամբողջ(ը)&nbsp;_ “all”
* _համայն&nbsp;_ “all, whole”
* _ամենայն&nbsp;_ “all, every”

### <a name="Neg">`Neg`</a>: negative pronoun or determiner

Negative pronominal words are distinguished from negating [particles](PART) and from words that inflect for polarity (verbs.) Those words do not use `PronType=Neg`, they use `Polarity=Neg` instead. See [Polarity]() and [Connegative]() for further details.

#### Examples

* _ոչ ոք_ “nobody”
* _ոչինչ_ “nothing”
* _ոչ մեկը_ “no one”
* _ոչ մի_ “no”

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner or adverb

#### Examples

* _ինչ-որ&nbsp;_ “some (of one thing)”, _ինչ-ինչ&nbsp;_ “some (of many thing)”
* _մի քանի&nbsp;_ “several”, _մի քանիսը&nbsp;_ “several people”, _որոշ&nbsp;_ “definite”
* _մեկը&nbsp;_ “one”, _մեկնումեկը&nbsp;_ “someone”, _մի&nbsp;_ “some, several”
* _ոմն&nbsp;_ “someone”, _ոմանք&nbsp;_ “some people”
* _ուրիշ&nbsp;_ “another”, _ուրիշը&nbsp;_ “another one”, _այլ&nbsp;_ “other”
* _որևէ, որևիցե&nbsp;_ “one or another”
* _այսինչ, այնինչ&nbsp;_ “this and that”
* _երբևէ, երբևիցե&nbsp;_ “sometime”
<!-- Interlanguage links updated Út 30. června 2026, 10:59:14 CEST -->
