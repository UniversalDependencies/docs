---
layout: base
title:  'Statistics of csubj in UD_German-GSD'
udver: '2'
---

## Treebank Statistics: UD_German-GSD: Relations: `csubj`

This relation is universal.
There are 1 language-specific subtypes of `csubj`: <tt><a href="de_gsd-dep-csubj-pass.html">csubj:pass</a></tt>.

194 nodes (0%) are attached to their parents as `csubj`.

129 instances of `csubj` (66%) are left-to-right (parent precedes child).
Average distance between parent and child is 9.80412371134021.

The following 13 pairs of parts of speech are connected with `csubj`: <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (100; 52% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (49; 25% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (27; 14% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (5; 3% instances), <tt><a href="de_gsd-pos-VERB.html">VERB</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (2; 1% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_gsd-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="de_gsd-pos-ADV.html">ADV</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_gsd-pos-DET.html">DET</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_gsd-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_gsd-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_gsd-pos-PRON.html">PRON</a></tt>-<tt><a href="de_gsd-pos-VERB.html">VERB</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 5 csubj	color:blue
1	Wer	wer	PRON	PWS	Case=Nom|Number=Sing|PronType=Int,Rel	5	nsubj	_	_
2	eine	ein	DET	ART	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing|NumType=Card|PronType=Art	4	det	_	_
3	andere	anderer	DET	ADJA	Case=Acc|Gender=Fem|Number=Sing|PronType=Ind	4	det	_	_
4	Politik	Politik	NOUN	NN	Case=Acc|Gender=Fem|Number=Sing	5	obj	_	_
5	will	wollen	VERB	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	csubj	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	5	punct	_	_
7	muß	müssen	AUX	VMFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	10	aux	_	_
8	auch	auch	ADV	ADV	_	10	advmod	_	_
9	anders	anders	ADV	ADV	_	10	advmod	_	_
10	wählen	wählen	VERB	VVINF	VerbForm=Inf	0	root	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 8 csubj	color:blue
1	Es	es	PRON	PPER	Case=Nom|Gender=Neut|Number=Sing|Person=3|PronType=Prs	3	expl	_	_
2	war	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	3	cop	_	_
3	faszinierend	faszinierend	ADJ	ADJD	Degree=Pos	0	root	_	_
4	mit	mit	ADP	APPR	_	5	case	_	_
5	Ihnen	Sie	PRON	PPER	Case=Dat|Person=2|Polite=Form|PronType=Prs	8	obl	_	_
6	zusammen	zusammen	ADV	ADV	_	8	compound:prt	_	_
7	zu	zu	PART	PTKZU	_	8	mark	_	_
8	arbeiten	arbeiten	VERB	VVINF	VerbForm=Inf	3	csubj	_	SpaceAfter=No
9	.	.	PUNCT	$.	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 4 csubj	color:blue
1	Warum	warum	ADV	PWAV	PronType=Int	4	advmod	_	_
2	die	der	PRON	PDS	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem,Rel	4	nsubj	_	_
3	wieder	wieder	ADV	ADV	_	4	advmod	_	_
4	aufmachen	aufmachen	VERB	VVINF	VerbForm=Inf	9	csubj	_	_
5	durften	dürfen	AUX	VMFIN	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	4	aux	_	_
6	ist	sein	AUX	VAFIN	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	9	cop	_	_
7	mir	ich	PRON	PPER	Case=Dat|Number=Sing|Person=1|PronType=Prs	9	nmod	_	_
8	ein	ein	DET	ART	Case=Nom|Definite=Ind|Gender=Neut|Number=Sing|NumType=Card|PronType=Art	9	det	_	_
9	Rätsel	Rätsel	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	0	root	_	SpaceAfter=No
10	!	!	PUNCT	$.	_	9	punct	_	_

~~~


