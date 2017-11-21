---
layout: base
title:  'Statistics of csubj in UD_German'
udver: '2'
---

## Treebank Statistics: UD_German: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="de-dep-csubj-pass.html">csubj:pass</a></tt>.

194 nodes (0%) are attached to their parents as `csubj`.

128 instances of `csubj` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.66494845360825.

The following 14 pairs of parts of speech are connected with `csubj`: <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-VERB.html">VERB</a></tt> (90; 46% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-VERB.html">VERB</a></tt> (56; 29% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-VERB.html">VERB</a></tt> (26; 13% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-ADJ.html">ADJ</a></tt> (4; 2% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="de-pos-ADV.html">ADV</a></tt>-<tt><a href="de-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="de-pos-VERB.html">VERB</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de-pos-PRON.html">PRON</a></tt>-<tt><a href="de-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-ADP.html">ADP</a></tt> (1; 1% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="de-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="de-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de-pos-X.html">X</a></tt>-<tt><a href="de-pos-ADJ.html">ADJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 csubj	color:blue
1	Wer	wer	PRON	PWS	Case=Nom|Number=Sing|PronType=Int	5	nsubj	_	_
2	eine	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|PronType=Art	4	det	_	_
3	andere	ander	ADJ	ADJA	Case=Acc|Degree=Pos|Gender=Fem|Number=Sing	4	amod	_	_
4	Politik	Politik	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
5	will	wollen	VERB	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	csubj	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	10	punct	_	_
7	muß	müssen	AUX	VMFIN	Number=Sing|Person=3|VerbForm=Fin	10	aux	_	_
8	auch	auch	ADV	ADV	_	10	advmod	_	_
9	anders	anders	ADV	ADV	_	10	advmod	_	_
10	wählen	wählen	VERB	VVINF	VerbForm=Inf	0	root	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 8 csubj	color:blue
1	Anmerkenswert	Anmerkenswert	ADJ	NN	_	0	root	_	_
2	ist	sein	AUX	VAFIN	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	1	cop	_	SpaceAfter=No
3	,	,	PUNCT	$,	_	1	punct	_	_
4	dass	dass	SCONJ	KOUS	_	8	mark	_	_
5	der	der	DET	ART	Case=Nom|Definite=Def|Gender=Masc|Number=Sing|PronType=Art	6	det	_	_
6	Laden	Laden	NOUN	NN	Case=Nom|Gender=Masc|Number=Sing	8	nsubj	_	_
7	auch	auch	ADV	ADV	_	8	advmod	_	_
8	ausbildet	ausbilden	VERB	VVFIN	Number=Sing|Person=3|VerbForm=Fin	1	csubj	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 csubj	color:blue
1	Warum	warum	ADV	PWAV	_	4	advmod	_	_
2	die	der	PRON	PDS	Case=Nom|PronType=Dem	4	nsubj	_	_
3	wieder	wieder	ADV	ADV	_	4	advmod	_	_
4	aufmachen	aufmachen	VERB	VVINF	VerbForm=Inf	9	csubj	_	_
5	durften	dürfen	AUX	VMFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	aux	_	_
6	ist	sein	AUX	VAFIN	Mood=Ind|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	mir	ich	PRON	PPER	Case=Dat|Number=Sing|Person=1|PronType=Prs	6	iobj	_	_
8	ein	ein	DET	ART	Definite=Ind|PronType=Art	9	det	_	_
9	Rätsel	Rätsel	NOUN	NN	_	0	root	_	SpaceAfter=No
10	!	!	PUNCT	$.	_	9	punct	_	_

~~~


