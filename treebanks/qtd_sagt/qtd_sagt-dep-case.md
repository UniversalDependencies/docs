---
layout: base
title:  'Statistics of case in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `case`

This relation is universal.

1326 nodes (4%) are attached to their parents as `case`.

917 instances of `case` (69%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.50678733031674.

The following 11 pairs of parts of speech are connected with `case`: <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (847; 64% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (262; 20% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (181; 14% instances), <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (9; 1% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (7; 1% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (6; 0% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (5; 0% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (5; 0% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="qtd_sagt-pos-X.html">X</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 6 case	color:blue
1	Eh	Eh	INTJ	_	_	3	discourse	_	LangID=TR
2	iyi	iyi	ADV	_	_	3	advmod	_	LangID=TR
3	hazırlandın	hazırlan	VERB	_	Aspect=Perf|Evident=Fh|Mood=Ind|Number=Sing|Person=2|Tense=Past	0	root	_	LangID=TR
4	mı	mi	AUX	_	Number=Sing|Person=3	3	aux:q	_	LangID=TR
5	şimdi	şimdi	NOUN	_	Case=Nom|Number=Sing	3	obl	_	LangID=TR
6	für	für	ADP	_	_	9	case	_	LangID=DE
7	die	der	DET	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur|PronType=Art	9	det	_	LangID=DE
8	mündlichen	_	ADJ	_	Case=Acc|Gender=Fem	9	amod	_	LangID=DE
9	Prüfungen	Prüfung	NOUN	_	Case=Acc|Gender=Fem|Number=Plur	3	obj	_	LangID=DE|SpaceAfter=No
10	?	?	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 case	color:blue
1	Ich	ich	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	LangID=DE
2	hab	haben	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	8	reparandum	_	LangID=DE
3	Dings	Ding	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	2	obj	_	LangID=DE
4	ähm	ähm	INTJ	_	_	2	discourse	_	LangID=DE
5	o	o	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	7	nmod	_	LangID=TR
6	kadar	kadar	ADP	_	_	5	case	_	LangID=TR
7	Prüfunglarım	Prüfung	NOUN	_	Case=Nom|Number=Plur|Number[psor]=Sing|Person[psor]=1	8	obj	_	CSPoint=Prüfung§larım|DeCase=Acc|DeGender=Fem|LangID=MIXED
8	var	var	ADJ	_	_	0	root	_	LangID=TR
9	ki	ki	ADV	_	_	8	mark	_	LangID=TR|SpaceAfter=No
10	.	.	PUNCT	_	_	8	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 case	color:blue
1	Ja	ja	INTJ	_	_	8	discourse	_	LangID=DE
2	ähm	ähm	INTJ	_	_	8	discourse	_	LangID=DE
3	mesela	mesela	ADV	_	_	8	advmod	_	LangID=TR
4	von	von	ADP	_	_	5	case	_	LangID=DE
5	Robert	Robert	PROPN	_	Case=Dat|Gender=Fem|Number=Sing	8	nmod	_	LangID=DE
6	Seethaler	_	PROPN	_	Case=Dat|Gender=Masc|Number=Sing	5	flat	_	LangID=DE
7	der	der	DET	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	8	det	_	LangID=DE
8	Trafikant	Trafikant	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	0	root	_	LangID=DE|SpaceAfter=No
9	.	.	PUNCT	_	_	8	punct	_	LangID=OTHER

~~~


