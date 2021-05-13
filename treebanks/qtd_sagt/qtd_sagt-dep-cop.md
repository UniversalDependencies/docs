---
layout: base
title:  'Statistics of cop in UD_Turkish_German-SAGT'
udver: '2'
---

## Treebank Statistics: UD_Turkish_German-SAGT: Relations: `cop`

This relation is universal.

723 nodes (2%) are attached to their parents as `cop`.

414 instances of `cop` (57%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.32088520055325.

The following 11 pairs of parts of speech are connected with `cop`: <tt><a href="qtd_sagt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (273; 38% instances), <tt><a href="qtd_sagt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (187; 26% instances), <tt><a href="qtd_sagt-pos-ADV.html">ADV</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (111; 15% instances), <tt><a href="qtd_sagt-pos-PRON.html">PRON</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (76; 11% instances), <tt><a href="qtd_sagt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (31; 4% instances), <tt><a href="qtd_sagt-pos-VERB.html">VERB</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (24; 3% instances), <tt><a href="qtd_sagt-pos-PART.html">PART</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (12; 2% instances), <tt><a href="qtd_sagt-pos-ADP.html">ADP</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="qtd_sagt-pos-INTJ.html">INTJ</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (3; 0% instances), <tt><a href="qtd_sagt-pos-NUM.html">NUM</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="qtd_sagt-pos-DET.html">DET</a></tt>-<tt><a href="qtd_sagt-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 6 cop	color:blue
1	Ama	ama	CCONJ	_	_	3	cc	_	LangID=TR
2	araban	araba	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=2	3	obj	_	LangID=TR
3	olduğu	ol	VERB	_	Number=Sing|Tense=Past|VerbForm=Part	0	root	_	LangID=TR
4	zaman	zaman	NOUN	_	Case=Nom|Number=Sing	3	obl	_	LangID=TR
5	dann	dann	ADV	_	_	11	advmod	_	LangID=DE
6	bist	sein	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	11	cop	_	LangID=DE
7	du	du	PRON	_	Case=Nom|Number=Sing|Person=2|PronType=Prs	11	nsubj	_	LangID=DE
8	ähm	ähm	INTJ	_	_	11	discourse	_	LangID=DE
9	gar	gar	ADV	_	_	11	advmod	_	LangID=DE
10	nicht	nicht	PART	_	Polarity=Neg	11	advmod	_	LangID=DE
11	abhängig	abhängig	ADJ	_	_	3	advcl	_	LangID=DE|SpaceAfter=No
12	.	.	PUNCT	_	_	3	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 4 cop	color:blue
1	Ya	ya	INTJ	_	_	7	discourse	_	LangID=TR
2	bunun	bu	PRON	_	Case=Gen|Number=Sing|PronType=Dem	3	nmod	_	LangID=TR
3	hikayesi	hikaye	NOUN	_	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	7	nsubj	_	LangID=TR
4	ist	sein	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	cop	_	LangID=DE
5	halt	halt	ADV	_	_	7	advmod	_	LangID=DE
6	ein	ein	DET	_	Case=Acc|Definite=Ind|Gender=Neut|Number=Sing|PronType=Art	7	det	_	LangID=DE
7	Krimibuch	_	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	0	root	_	LangID=DE
8	ja	ja	INTJ	_	_	7	discourse	_	LangID=DE|SpaceAfter=No
9	.	.	PUNCT	_	_	7	punct	_	LangID=OTHER

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 3 cop	color:blue
1	Şimdi	şimdi	NOUN	_	Case=Nom|Number=Sing	5	obl	_	LangID=TR
2	es	es	PRON	_	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	5	expl	_	LangID=DE
3	ist	sein	AUX	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	LangID=DE
4	schon	schon	ADV	_	_	5	advmod	_	LangID=DE
5	so	so	ADV	_	_	0	root	_	LangID=DE
6	ähm	ähm	INTJ	_	_	5	discourse	_	LangID=DE
7	dass	dass	SCONJ	_	_	11	mark	_	LangID=DE
8	halt	halt	ADV	_	_	11	advmod	_	LangID=DE
9	Rassismus	Rassismus	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	11	obj	_	LangID=DE
10	ja	ja	ADV	_	_	11	advmod	_	LangID=DE
11	gibt	geben	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	ccomp	_	LangID=DE|SpaceAfter=No
12	.	.	PUNCT	_	_	5	punct	_	LangID=OTHER

~~~


