---
layout: base
title:  'Statistics of acl:relcl in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-acl.html">acl</a></tt>.

19 nodes (0%) are attached to their parents as `acl:relcl`.

18 instances of `acl:relcl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.8947368421053.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (9; 47% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (3; 16% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (2; 11% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (2; 11% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 17 acl:relcl	color:blue
1	Nichts	nichts	PRON	PIS	Case=Nom|Gender=Neut|Number=Sing|PronType=Neg	7	nsubj	_	_
2	ist	sein	AUX	VAFIN	_	7	cop	_	_
3	zu	zu	ADP	APPR	_	6	case	_	_
4	der	der	DET	ART	Definite=Def|PronType=Art	6	det	_	_
5	wahren	wahr	ADJ	ADJA	_	6	amod	_	_
6	Religiosität	Religiosität	NOUN	NN	Case=Dat	7	nmod	_	_
7	unentbehrlicher	unentbehrlich	ADJ	ADJD	_	0	root	_	_
8	als	als	CCONJ	KOKOM	_	10	case	_	_
9	ein	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	10	det	_	_
10	Mittelglied	Mittelglied	NOUN	NN	Case=Nom|Gender=Neut|Number=Sing	7	nmod	_	SpaceAfter=No
11	,	,	PUNCT	$,	_	17	punct	_	_
12	das	der	PRON	PRELS	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem,Rel	17	nsubj	_	_
13	uns	wir	PRON	PPER	Case=Acc|Number=Plur|Person=1|PronType=Prs	17	obj	_	_
14	mit	mit	ADP	APPR	_	16	case	_	_
15	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	16	det	_	_
16	Gottheit	Gottheit	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	17	obl	_	_
17	verbindet	verbinden	VERB	VVFIN	_	10	acl:relcl	_	SpaceAfter=No
18	.	.	PUNCT	$.	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 11 acl:relcl	color:blue
1	Für	für	ADP	APPR	_	2	case	_	_
2	die	der	PRON	PDS	Case=Acc|PronType=Dem,Rel	30	obl	_	SpaceAfter=No
3	,	,	PUNCT	$,	_	11	punct	_	_
4	welche	welcher	DET	PRELS	Case=Nom|PronType=Int,Rel	11	nsubj	_	_
5	auch	auch	ADV	ADV	_	11	advmod	_	_
6	in	in	ADP	APPR	_	8	case	_	_
7	die	der	DET	ART	Definite=Def|PronType=Art	8	det	_	_
8	Gesellschaft	Gesellschaft	NOUN	NN	_	11	obl	_	_
9	ihre	ihr	DET	PPOSAT	Person=3|Poss=Yes|PronType=Prs	10	det:poss	_	_
10	Trägheit	Trägheit	NOUN	NN	Case=Acc	11	obj	_	_
11	mitbringen	mitbringen	VERB	VVINF	_	2	acl:relcl	_	_
12	und	und	CCONJ	KON	_	20	cc	_	_
13	beiläufig	beiläufig	ADV	ADV	_	20	advmod	_	_
14	gern	gern	ADV	ADV	_	20	advmod	_	_
15	was	was	PRON	PWS	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	19	obj	_	_
16	sie	sie	PRON	PPER	Case=Nom|Number=Plur|Person=3|PronType=Prs	19	nsubj	_	_
17	um	um	ADP	APPR	_	18	case	_	_
18	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	19	obl	_	_
19	sehn	sehen	VERB	VVINF	_	20	ccomp	_	_
20	mustern	mustern	VERB	VVINF	_	11	conj	_	_
21	und	und	CCONJ	KON	_	22	cc	_	_
22	klassifizieren	klassifizieren	VERB	VVINF	_	20	conj	_	_
23	möchten	mögen	AUX	VMFIN	_	20	aux	_	SpaceAfter=No
24	,	,	PUNCT	$,	_	20	punct	_	_
25	ist	sein	AUX	VAFIN	_	30	cop	_	_
26	dies	dieser	DET	PDS	Case=Nom|PronType=Dem	30	nsubj	_	_
27	freilich	freilich	ADV	ADV	_	30	advmod	_	_
28	eine	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	30	det	_	_
29	bequeme	bequem	ADJ	ADJA	_	30	amod	_	_
30	Eigenschaft	Eigenschaft	NOUN	NN	Case=Nom	0	root	_	SpaceAfter=No
31	.	.	PUNCT	$.	_	30	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 11 acl:relcl	color:blue
1	Es	es	PRON	PPER	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	gibt	geben	VERB	VVFIN	_	0	root	_	_
3	Demonstrationen	Demonstration	NOUN	NN	Case=Nom	2	nsubj	_	_
4	die	der	DET	ART	Definite=Def|PronType=Art	5	det	_	_
5	Menge	Menge	NOUN	NN	_	3	nmod	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	11	punct	_	_
7	die	der	PRON	PRELS	Case=Nom|Number=Plur|PronType=Dem,Rel	11	nsubj	_	_
8	der	der	DET	ART	Case=Dat|Definite=Def|Gender=Fem|Number=Sing|PronType=Art	9	det	_	_
9	Form	Form	NOUN	NN	Case=Dat|Gender=Fem|Number=Sing	11	obl	_	_
10	nach	nach	ADP	APPO	_	9	case	_	_
11	vortrefflich	vortrefflich	ADJ	ADJD	_	3	acl:relcl	_	_
12	sind	sein	AUX	VAFIN	_	11	cop	_	SpaceAfter=No
13	,	,	PUNCT	$,	_	11	punct	_	_
14	für	für	ADP	APPR	_	18	case	_	_
15	schiefe	schief	ADJ	ADJA	_	18	amod	_	_
16	und	und	CCONJ	KON	_	17	cc	_	_
17	platte	platt	ADJ	ADJA	_	15	conj	_	_
18	Sätze	Satz	NOUN	NN	Case=Acc	11	nmod	_	SpaceAfter=No
19	.	.	PUNCT	$.	_	2	punct	_	_

~~~


