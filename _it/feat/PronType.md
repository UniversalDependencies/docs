---
layout: feature
title: 'PronType'
shortdef: 'pronominal type'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Prs">Prs</a></td>
  <td><a href="#Art">Art</a></td>
  <td><a href="#Int">Int</a></td>
  <td><a href="#Rel">Rel</a></td>
  <td><a href="#Dem">Dem</a></td>
  <td><a href="#Tot">Tot</a></td>
  <td><a href="#Neg">Neg</a></td>
  <td><a href="#Ind">Ind</a></td>
  <td><a href="#Exc">Exc</a></td>
  <td><a href="#Predet">Predet</a></td>
  <td><a href="#Ord">Ord</a></td>
</tr>
</table>

This feature typically applies to [pronouns](u-pos/PRON),
[determiners](u-pos/DET), pronominal [numerals](u-pos/NUM)
(quantifiers) and pronominal [adverbs](u-pos/ADV).

### <a name="Prs">`Prs`</a>: personal or possessive personal pronoun or determiner

See also the [Poss]() feature that distinguishes normal personal
pronouns from possessives and the [Clitic]() feature that tells
whether the pronoun is a clitic. Note that `Prs` also includes reflexive
personal/possessive pronouns (see the [Reflex]() feature).

#### Examples

* Personal pronouns: _Uno di <b>loro</b>_ "One among them", _Per <b>lui</b> è utile_ "For him it's useful"
* Possessive pronouns (`Poss=Yes`): _La <b>sua</b> è migliore_ "Hers is better", _I <b>suoi</b> sono felici_ "Her/his [parents] are happy"
* Possessive determiners/adjectives (`Poss=Yes`): _La <b>sua</b> scuola è migliore_ "Her/his school is better", _I <b>loro</b> amici_ "Their friends".
* Clitic pronouns (`Clitic=Yes`): _<b>Si</b> è trasformato_ "Has transformed itself" (reflexive), _<b>Ti</b> ho dato_ "I have given you" (indirect object), _Ora <b>si</b> cerca il colpevole_ "Now one/somebody searches for the culprit" (impersonal form), _<b>Lo</b> vediamo spesso_ "We often see him/it"

### <a name="Art">`Art`</a>: article

Article is a special case of determiner that bears the feature of
[definiteness](Definite).

#### Examples

* Definite articles (`Definite=Def`): _<b>La</b> luna_ "The moon", _<b>I</b> regali di Natale_ "Christmas presents"
* Indefinite articles (`Definite=Ind`): _<b>Un</b> amico_ "A friend", _<b>Una</b> sorpresa_ "A surprise"

### <a name="Int">`Int`</a>: interrogative pronoun, determiner, numeral or adverb

Note that possessive interrogative determiners (_whose_) can be
distinguished by the [Poss]() feature.

#### Examples:

* Interrogative pronouns: _<b>Chi</b> è il presidente?_ "Who is the president?"
* Interrogative determiners: _<b>Che</b> cosa faremo adesso?_ "What shall we do now?", _<b>Quale</b> libro hai letto?_ "Which book did you read?"

Note: for the time being we do not use the feature `ProntType=Int` interrogative pronouns such as _dove_ "where" and _quando_ "when" in sentences like _<b>Dov'</b> è Siena?_ "Where is Siena?".

### <a name="Rel">`Rel`</a>: relative pronoun, determiner, numeral or adverb

#### Examples:

* Relative pronouns: _La strada <b>che</b> porta al mare_ "The road which leads to the sea", _Il libro <b>che</b> ho letto_ "The book that I read".
* Relative determiners: _Un autore sul <b>cui</b> futuro puoi scommettere_ "An author on whose future you can bet".


### <a name="Dem">`Dem`</a>: demonstrative pronoun, determiner, numeral or adverb

These are often parallel to interrogatives.

#### Examples

* Demonstrative pronouns: _Per <b>questo</b> sono ambiziosi_ "For this [reason] they are ambitious".
* Demonstrative determiners: _Parte di <b>questo</b> denaro_ "Part of this money".

Note: Demonstrative adverbs such as _qui_ "here" and _là_ "there", _ora_ "now" e _allora_ "then" are not marked with `PronType=Dem`.

### <a name="Tot">`Tot`</a>: total (collective) pronoun, determiner or adverb

#### Examples

`PronType=Tot` is used for universal quantifiers, mainly *tutto* (*tutti, tutta, tutte*) and also *entrambi* and *ambedue* ("both"). In practice it is a determiner (`DET`) that precedes the definite article or demonstrative, and it is attached as `det:predet`.

~~~ conllu
# sent_id = isst_tanl-3590
# text = Ecco tutti i retroscena.
1	Ecco	ecco	ADV	B	_	4	advmod	4:advmod	_
2	tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	4	det:predet	4:det:predet	_
3	i	il	DET	RD	Definite=Def|Gender=Masc|Number=Plur|PronType=Art	4	det	4:det	_
4	retroscena	retroscena	NOUN	S	Gender=Masc|Number=Plur	0	root	0:root	SpaceAfter=No
5	.	.	PUNCT	FS	_	4	punct	4:punct	_
~~~

~~~ conllu
# sent_id = 5_WIKIBalzac-11
# text = fallì in tutti questi tentativi.
1	fallì	fallire	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	0:root	_
2	in	in	ADP	E	_	5	case	5:case	_
3	tutti	tutto	DET	T	Gender=Masc|Number=Plur|PronType=Tot	5	det:predet	5:det:predet	_
4	questi	questo	DET	DD	Gender=Masc|Number=Plur|PronType=Dem	5	det	5:det	_
5	tentativi	tentativo	NOUN	S	Gender=Masc|Number=Plur	1	obl	1:obl:in	SpaceAfter=No
6	.	.	PUNCT	FS	_	1	punct	1:punct	_
~~~

~~~ conllu
# sent_id = tut-11
# text = Entrambe le categorie di limiti presentano dei requisiti comuni:
1	Entrambe	entrambi	DET	T	Gender=Fem|Number=Plur|PronType=Tot	3	det:predet	3:det:predet	_
2	le	il	DET	RD	Definite=Def|Gender=Fem|Number=Plur|PronType=Art	3	det	3:det	_
3	categorie	categoria	NOUN	S	Gender=Fem|Number=Plur	6	nsubj	6:nsubj	_
4	di	di	ADP	E	_	5	case	5:case	_
5	limiti	limite	NOUN	S	Gender=Masc|Number=Plur	3	nmod	3:nmod:di	_
6	presentano	presentare	VERB	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	_
7	dei	dei	DET	RI	Definite=Ind|Gender=Masc|Number=Plur|PronType=Art	8	det	8:det	_
8	requisiti	requisito	NOUN	S	Gender=Masc|Number=Plur	6	obj	6:obj	_
9	comuni	comune	ADJ	A	Number=Plur	8	amod	8:amod	SpaceAfter=No
10	:	:	PUNCT	FC	_	6	punct	6:punct	_
~~~

### <a name="Neg">`Neg`</a>: negative pronoun, determiner or adverb

#### Examples:

We distinguish only negative adverbs such as: _non_, _nemmeno_, _neppure_.

### <a name="Ind">`Ind`</a>: indefinite pronoun, determiner, numeral or adverb

#### Examples

* Indefinite pronouns: _uno_ "one", _tutti_ "everybody", _ognuno_ "each one", _chiunque_ "anybody", _qualcosa_ "something", _qualcuno_ "somebody"
* indefinite determiners: _tutti_ "all", _qualche_ "some", _ogni_ "each", _alcuni_ "some", _diversi_ "several"

### <a name="Exc">`Exc`</a>: exclamative determiners.

#### Examples

* _che_ disastro "what a disaster", _che_ catastrofe "what a catastrophe"

### <a name="Ord">`Ord`</a>: ordinal pronouns. This value is language specific.

It is used to mark ordinal pronouns. Part of speech is PRON/NO. When ordinals are used as noun modifiers they are marked as [ADJ].

#### Examples

* Il _primo_ sostiene che ...  "the first asserts that ...
* Un _quarto_ d'ora "a quarter of an hour"
* Valentina è _quinta_ "Valentina is fifth"
<!-- Interlanguage links updated Út 30. června 2026, 10:59:14 CEST -->
