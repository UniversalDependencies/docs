---
layout: base
title:  'Statistics of case in UD_Turkish'
udver: '2'
---

## Treebank Statistics: UD_Turkish: Relations: `case`

This relation is universal.

2183 nodes (4%) are attached to their parents as `case`.

2127 instances of `case` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.45762711864407.

The following 18 pairs of parts of speech are connected with `case`: <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (1069; 49% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (515; 24% instances), <tt><a href="tr-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (280; 13% instances), <tt><a href="tr-pos-PRON.html">PRON</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (126; 6% instances), <tt><a href="tr-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (67; 3% instances), <tt><a href="tr-pos-NUM.html">NUM</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (49; 2% instances), <tt><a href="tr-pos-ADV.html">ADV</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (26; 1% instances), <tt><a href="tr-pos-DET.html">DET</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (26; 1% instances), <tt><a href="tr-pos-ADP.html">ADP</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="tr-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="tr-pos-INTJ.html">INTJ</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (3; 0% instances), <tt><a href="tr-pos-NUM.html">NUM</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (3; 0% instances), <tt><a href="tr-pos-AUX.html">AUX</a></tt>-<tt><a href="tr-pos-ADP.html">ADP</a></tt> (2; 0% instances), <tt><a href="tr-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr-pos-NUM.html">NUM</a></tt> (2; 0% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="tr-pos-VERB.html">VERB</a></tt>-<tt><a href="tr-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Orada	ora	NOUN	Noun	Case=Loc|Number=Sing|Person=3	3	obl	_	_
2	ki	ki	ADP	Rel	_	1	case	_	_
3	tartışma	tartış	VERB	Verb	Aspect=Perf|Case=Nom|Mood=Ind|Polarity=Pos|Tense=Pres|VerbForm=Vnoun	5	nsubj	_	_
4	hayli	hayli	ADV	Adverb	_	5	advmod	_	_
5	zengin	zengin	ADJ	Adj	_	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 case	color:blue
1	Herkes	herkes	NOUN	Noun	Case=Nom|Number=Sing|Person=3	4	nsubj	_	_
2	istediği	iste	VERB	Verb	Aspect=Perf|Mood=Ind|Number[psor]=Sing|Person[psor]=3|Polarity=Pos|Tense=Past|VerbForm=Part	4	advmod:emph	_	_
3	gibi	gibi	ADP	PCNom	_	2	case	_	_
4	sevişiyor	seviş	VERB	Verb	Aspect=Prog|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Polite=Infm|Tense=Pres	0	root	_	SpaceAfter=No
5	,	,	PUNCT	Punc	_	8	punct	_	_
6	her	her	DET	Det	_	8	nsubj	_	_
7	şey	şey	NOUN	Noun	Case=Nom|Number=Sing|Person=3	6	compound	_	_
8	serbest	serbest	ADJ	Adj	_	4	conj	_	SpaceAfter=No
9	.	.	PUNCT	Punc	_	8	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 case	color:blue
1	Öyle	öyle	ADJ	Adj	_	3	amod	_	_
2	ce	ce	ADP	Ly	_	1	case	_	_
3	yiyin	ye	VERB	Verb	Aspect=Perf|Mood=Imp|Number=Plur|Person=2|Polarity=Pos|Tense=Pres	0	root	_	SpaceAfter=No
4	.	.	PUNCT	Punc	_	3	punct	_	_

~~~


