---
layout: base
title:  'Statistics of orphan in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `orphan`

This relation is universal.

23 nodes (0%) are attached to their parents as `orphan`.

12 instances of `orphan` (52%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.34782608695652.

The following 11 pairs of parts of speech are connected with `orphan`: <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (6; 26% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (4; 17% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (3; 13% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (2; 9% instances), <tt><a href="qtd_sagt-pos-DET.html">DET</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (2; 9% instances), <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt> (1; 4% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt> (1; 4% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 orphan	color:blue
1	Ja	ja	INTJ	_	_	5	discourse	_	LangID=DE
2	zaten	zaten	ADV	_	_	5	advmod	_	LangID=TR
3	kolay	kolay	ADJ	_	_	4	amod	_	LangID=TR
4	dersleri	ders	NOUN	_	Case=Acc|Number=Plur	5	orphan	_	LangID=TR
5	man	man	PRON	_	Case=Nom|Definite=Ind|Number=Sing|PronType=Ind	0	root	_	LangID=DE
6	irgendwie	irgendwie	ADV	_	_	5	advmod	_	LangID=DE
7	noch	noch	ADV	_	_	5	advmod	_	LangID=DE|SpaceAfter=No
8	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 2 orphan	color:blue
1	Da	da	ADV	_	_	5	advmod	_	LangID=DE
2	wir	wir	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	5	orphan	_	LangID=DE
3	in	in	ADP	_	_	5	case	_	LangID=DE
4	dem	der	DET	_	Case=Dat|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	5	det	_	LangID=DE
5	Kofferraum	Kofferraum	NOUN	_	Case=Dat|Gender=Masc|Number=Sing	9	parataxis	_	LangID=DE
6	valiz	valiz	NOUN	_	Case=Nom|Number=Sing	9	nsubj	_	LangID=TR
7	çok	çok	DET	_	_	8	det	_	LangID=TR
8	yer	yer	NOUN	_	Case=Nom|Number=Sing	9	obj	_	LangID=TR
9	aldığından	al	VERB	_	Case=Abl|Number=Sing|Number[psor]=Sing|Person[psor]=3|Tense=Past|VerbForm=Part	0	root	_	LangID=TR
10	dolayı	dolayı	ADP	_	_	9	mark	_	LangID=TR|SpaceAfter=No
11	.	.	PUNCT	_	_	9	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 26	bgColor:blue
# visual-style 26	fgColor:white
# visual-style 26 25 orphan	color:blue
1	Äh	Äh	INTJ	_	_	6	discourse	_	LangID=DE
2	was	was	PRON	_	Case=Acc|Gender=Neut|Number=Sing|PronType=Int	6	obj	_	LangID=DE
3	wir	wir	PRON	_	Case=Nom|Number=Plur|Person=1|PronType=Prs	6	nsubj	_	LangID=DE
4	auch	auch	ADV	_	_	6	advmod	_	LangID=DE
5	noch	noch	ADV	_	_	6	advmod	_	LangID=DE
6	haben	haben	VERB	_	Mood=Ind|Number=Plur|Person=1|Tense=Pres|VerbForm=Fin	9	advcl	_	LangID=DE
7	ist	sein	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	LangID=DE
8	halt	halt	ADV	_	_	9	advmod	_	LangID=DE
9	Petersilie	Petersilie	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	0	root	_	LangID=DE|SpaceAfter=No
10	,	,	PUNCT	_	_	13	punct	_	LangID=OTHER
11	zu	zu	ADP	_	_	13	case	_	LangID=DE
12	dem	der	DET	_	Case=Dat|Definite=Def|Gender=Neut|Number=Sing|PronType=Art	13	det	_	LangID=DE
13	Beispiel	Beispiel	NOUN	_	Case=Dat|Gender=Neut|Number=Sing	9	obl	_	LangID=DE
14	auch	auch	ADV	_	_	15	advmod	_	LangID=DE
15	Peperoni	Peperoni	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	9	conj	_	LangID=DE
16	ondan	o	PRON	_	Case=Abl|Number=Sing|Person=3|PronType=Prs	20	obl	_	LangID=TR
17	sonra	sonra	ADP	_	_	16	case	_	LangID=TR
18	eh	eh	INTJ	_	_	20	discourse	_	LangID=TR
19	soğan	soğan	NOUN	_	Case=Nom|Number=Sing	20	nsubj	_	LangID=TR
20	var	var	ADJ	_	_	9	conj	_	LangID=TR
21	lahana	lahana	NOUN	_	Case=Nom|Number=Sing	22	nsubj	_	LangID=TR
22	var	var	ADJ	_	_	20	conj	_	LangID=TR
23	yani	yani	ADV	_	_	26	orphan	_	LangID=TR
24	zaten	zaten	ADV	_	_	26	orphan	_	LangID=TR
25	hep	hep	ADV	_	_	26	orphan	_	LangID=TR
26	şey	şey	NOUN	_	Case=Nom|Number=Sing	9	parataxis:discourse	_	LangID=TR
27	em	em	INTJ	_	_	26	discourse	_	LangID=TR|SpaceAfter=No
28	.	.	PUNCT	_	_	9	punct	_	LangID=OTHER

~~~


