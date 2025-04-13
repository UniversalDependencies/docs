---
layout: base
title:  'Statistics of acl:relcl in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="de_lit-dep-acl.html">acl</a></tt>.

20 nodes (0%) are attached to their parents as `acl:relcl`.

19 instances of `acl:relcl` (95%) are left-to-right (parent precedes child).
Average distance between parent and child is 10.65.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (9; 45% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (4; 20% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (2; 10% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (2; 10% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 5% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 5% instances).


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
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 14 acl:relcl	color:blue
1	Die	der	DET	ART	Case=Acc|Definite=Def|PronType=Art	2	det	_	_
2	Philosophie	Philosophie	NOUN	NN	Case=Acc	9	obj	_	_
3	über	über	ADP	APPR	_	5	case	_	_
4	einen	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	5	det	_	_
5	Gegenstand	Gegenstand	NOUN	NN	_	2	nmod	_	_
6	kann	können	AUX	VMFIN	_	9	aux	_	_
7	nur	nur	ADV	ADV	_	9	advmod	_	_
8	der	der	PRON	PRELS	Case=Nom|PronType=Dem,Rel	9	nsubj	_	_
9	brauchen	brauchen	VERB	VVINF	_	0	root	_	SpaceAfter=No
10	,	,	PUNCT	$,	_	9	punct	_	_
11	der	der	PRON	PRELS	Case=Nom|PronType=Dem,Rel	14	nsubj	_	_
12	den	der	DET	ART	Definite=Def|PronType=Art	13	det	_	_
13	Gegenstand	Gegenstand	NOUN	NN	Case=Acc	14	obj	_	_
14	kennt	kennen	VERB	VVFIN	_	8	acl:relcl	_	SpaceAfter=No
15	,	,	PUNCT	$,	_	17	punct	_	_
16	oder	oder	CCONJ	KON	_	17	cc	_	_
17	hat	haben	AUX	VAFIN	_	14	conj	_	SpaceAfter=No
18	;	;	PUNCT	$.	_	9	punct	_	_
19	nur	nur	ADV	ADV	_	22	advmod	_	_
20	der	der	PRON	PDS	Case=Nom|PronType=Dem,Rel	22	nsubj	_	_
21	wird	werden	AUX	VAFIN	_	22	aux	_	_
22	begreifen	begreifen	VERB	VVINF	_	9	conj	_	_
23	können	können	AUX	VMINF	_	22	aux	_	SpaceAfter=No
24	,	,	PUNCT	$,	_	22	punct	_	_
25	was	was	PRON	PRELS	Case=Acc|Gender=Neut|Number=Sing|PronType=Int,Rel	27	obj	_	_
26	sie	sie	PRON	PPER	Case=Nom|Person=3|PronType=Prs	27	nsubj	_	_
27	will	wollen	AUX	VMFIN	_	22	ccomp	_	_
28	und	und	CCONJ	KON	_	29	cc	_	_
29	meint	meinen	VERB	VVFIN	_	27	conj	_	SpaceAfter=No
30	.	.	PUNCT	$.	_	9	punct	_	_

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


