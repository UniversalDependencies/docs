---
layout: base
title:  'Statistics of obl:arg in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `obl:arg`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="de_lit-dep-obl-agent.html">obl:agent</a></tt>.

202 nodes (0%) are attached to their parents as `obl:arg`.

148 instances of `obl:arg` (73%) are right-to-left (child precedes parent).
Average distance between parent and child is 4.01485148514851.

The following 13 pairs of parts of speech are connected with `obl:arg`: <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (85; 42% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (69; 34% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (22; 11% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (8; 4% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (4; 2% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (3; 1% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADP.html">ADP</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt> (2; 1% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-ADV.html">ADV</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 12 3 obl:arg	color:blue
1	man	man	PRON	PIS	Case=Nom|Number=Sing|PronType=Ind	12	nsubj	_	_
2	müßte	müssen	AUX	VMFIN	_	12	aux	_	_
3	ihm	er	PRON	PPER	Case=Dat|Gender=Masc|Number=Sing|Person=3|PronType=Prs	12	obl:arg	_	_
4	denn	denn	ADV	ADV	_	12	advmod	_	_
5	Helden	Held	NOUN	NN	Case=Acc	12	obj	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	7	punct	_	_
7	Musik	Musik	NOUN	NN	_	5	conj	_	_
8	oder	oder	CCONJ	KON	_	9	cc	_	_
9	Narren	Narr	NOUN	NN	_	5	conj	_	_
10	zum	zu	ADP	APPRART	_	11	case	_	_
11	besten	gut	ADJ	ADJA	_	12	advmod	_	_
12	geben	geben	VERB	VVINF	_	0	root	_	SpaceAfter=No
13	.	.	PUNCT	$.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 6 obl:arg	color:blue
1	Unser	unser	DET	PPOSAT	Number[psor]=Plur|Person=1|Poss=Yes|PronType=Prs	3	det:poss	_	_
2	sämtliches	sämtlich	ADJ	ADJA	_	3	amod	_	_
3	Wahrnehmungsvermögen	Wahrnehmungsvermögen	NOUN	NN	Case=Nom	4	nsubj	_	_
4	gleicht	gleichen	VERB	VVFIN	_	0	root	_	_
5	dem	der	DET	ART	Case=Dat|Definite=Def|PronType=Art	6	det	_	_
6	Auge	Auge	NOUN	NN	Case=Dat	4	obl:arg	_	SpaceAfter=No
7	.	.	PUNCT	$.	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 5 obl:arg	color:blue
1	Grade	Grade	ADV	ADV	_	8	advmod	_	_
2	alles	alle	DET	PIS	Case=Acc|PronType=Tot	8	obj	_	SpaceAfter=No
3	,	,	PUNCT	$,	_	6	punct	_	_
4	was	was	PRON	PRELS	Case=Nom|Gender=Neut|Number=Sing|PronType=Int,Rel	6	nsubj	_	_
5	jenem	jener	DET	PDS	Case=Dat|PronType=Dem	6	obl:arg	_	_
6	fehlt	fehlen	VERB	VVFIN	_	2	acl	_	SpaceAfter=No
7	,	,	PUNCT	$,	_	6	punct	_	_
8	hat	haben	AUX	VAFIN	_	0	root	_	_
9	dieser	dieser	DET	PDS	Case=Nom|PronType=Dem	8	nsubj	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	8	punct	_	_

~~~


