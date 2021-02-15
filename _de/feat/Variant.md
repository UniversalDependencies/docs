---
layout: feature
title: 'Variant'
shortdef: 'alternative form of word'
udver: '2'
---

<table class="typeindex" border="1">
<tr>
  <td style="background-color:cornflowerblue;color:white"><strong>Values:</strong> </td>
  <td><a href="#Short">Short</a></td>
</tr>
</table>

<!-- from de_hdt-ud-dev.conllu:
# sent_id = hdt-s167
# text = Überweisungen werden auf diesem Wege jedoch nicht möglich sein .
1	Überweisungen	Überweisung	NOUN	NN	Case=Nom|Gender=Fem|Number=Plur|Person=3	8	nsubj	_	_
2	werden	werden	AUX	VAFIN	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin	8	aux	_	_
3	auf	auf	ADP	APPR	AdpType=Prep|Case=Dat	5	case	_	_
4	diesem	diesem	DET	PDAT	Case=Dat|Gender=Masc|Number=Sing|PronType=Dem	5	det	_	_
5	Wege	Weg	NOUN	NN	Case=Dat|Gender=Masc|Number=Sing|Person=3	8	obl	_	_
6	jedoch	jedoch	ADV	ADV	_	8	advmod	_	_
7	nicht	nicht	PART	PTKNEG	Polarity=Neg	8	advmod	_	_
8	möglich	möglich	ADJ	ADJD	Degree=Pos|Variant=Short	0	root	_	_
9	sein	sein	AUX	VAINF	VerbForm=Inf	8	cop	_	_
10	.	.	PUNCT	$.	PunctType=Peri	8	punct	_	_

# sent_id = hdt-s6431
# text = Für den Streaming-Bereich wurde ein kostenpflichtiges Premium-Angebot des Spinner-Services als mögliche Variante erwähnt .
1	Für	Für	ADP	APPR	AdpType=Prep|Case=Acc	3	case	_	_
2	den	den	DET	ART	Case=Acc|Gender=Masc|Number=Sing|PronType=Art	3	det	_	_
3	Streaming-Bereich	Bereich	NOUN	NN	Gender=Masc|Number=Sing|Person=3	13	obl	_	_
4	wurde	werden	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	13	aux:pass	_	_
5	ein	ein	DET	ART	Case=Nom|Gender=Neut|Number=Sing|PronType=Art	7	det	_	_
6	kostenpflichtiges	kostenpflichtiges	ADJ	ADJA	Gender=Neut|Number=Sing	7	amod	_	_
7	Premium-Angebot	Angebot	NOUN	NN	Gender=Neut|Number=Sing|Person=3	13	nsubj:pass	_	_
8	des	des	DET	ART	Case=Gen|Gender=Masc|Number=Sing|PronType=Art	9	det	_	_
9	Spinner-Services	Service	NOUN	NN	Case=Gen|Gender=Masc|Number=Sing|Person=3	7	nmod	_	_
10	als	als	CCONJ	KOKOM	ConjType=Comp	12	case	_	_
11	mögliche	möglich	ADJ	ADJA	Degree=Pos|Gender=Fem|Number=Sing	12	amod	_	_
12	Variante	Variante	NOUN	NN	Gender=Fem|Number=Sing|Person=3	13	obl	_	_
13	erwähnt	erwähnen	VERB	VVPP	Aspect=Perf|VerbForm=Part	0	root	_	_
14	.	.	PUNCT	$.	PunctType=Peri	13	punct	_	_

-->

### <a name="Short">`Short`</a>: short form of adjectives

In some German treebanks, `Variant=Short` is used to distinguish the adverbial/predicative
form of an adjective, i.e. the form that lacks the suffix showing agreement with a modified
noun.

In the Stuttgart-Tübingen XPOS tagset, the short form is tagged `ADJD` while the attributive
long form is tagged `ADJA`.

#### Examples

* Predicative (short): _Überweisungen werden auf diesem Wege jedoch nicht <b>möglich</b> sein._
  “However, transfers will not be possible in this way.”
* Attributive (long): _Für den Streaming-Bereich wurde ein kostenpflichtiges Premium-Angebot des Spinner-Services als mögliche Variante erwähnt._
  “A fee-based premium offer of the Spinner service was mentioned as a possible variant for the streaming area.”

<!-- Interlanguage links updated Čt lis 12 09:43:07 CET 2020 -->
