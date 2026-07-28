---
layout: base
title:  'Statistics of acl in UD_German-LIT'
udver: '2'
---

## Treebank Statistics: UD_German-LIT: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="de_lit-dep-acl-relcl.html">acl:relcl</a></tt>.

83 nodes (0%) are attached to their parents as `acl`.

75 instances of `acl` (90%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.93975903614458.

The following 18 pairs of parts of speech are connected with `acl`: <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (42; 51% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (9; 11% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (4; 5% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (4; 5% instances), <tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (3; 4% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (3; 4% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (3; 4% instances), <tt><a href="de_lit-pos-DET.html">DET</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-DET.html">DET</a></tt> (2; 2% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="de_lit-pos-PROPN.html">PROPN</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (2; 2% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-AUX.html">AUX</a></tt>-<tt><a href="de_lit-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt>-<tt><a href="de_lit-pos-X.html">X</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-PRON.html">PRON</a></tt>-<tt><a href="de_lit-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="de_lit-pos-VERB.html">VERB</a></tt>-<tt><a href="de_lit-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl	color:blue
1	Sinnlichkeit	Sinnlichkeit	NOUN	NN	_	0	root	_	_
2	die	der	DET	ART	Case=Nom|Definite=Def|PronType=Art	5	nsubj	_	_
3	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	5	obj	_	_
4	selbst	selbst	ADV	ADV	_	5	advmod	_	_
5	anschaut	anschauen	VERB	VVFIN	_	1	acl	_	SpaceAfter=No
6	,	,	PUNCT	$,	_	10	punct	_	_
7	und	und	CCONJ	KON	_	10	cc	_	_
8	sich	sich	PRON	PRF	Case=Acc|Person=3|PronType=Prs|Reflex=Yes	10	obj	_	_
9	selbst	selbst	ADV	ADV	_	10	advmod	_	_
10	bildet	bilden	VERB	VVFIN	_	5	conj	_	SpaceAfter=No
11	.	.	PUNCT	$.	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 9 acl	color:blue
1	ich	ich	PRON	PPER	Case=Nom|Number=Sing|Person=1|PronType=Prs	2	nsubj	_	_
2	glaube	glauben	VERB	VVFIN	_	0	root	_	_
3	diese	dieser	DET	PDS	Case=Nom|PronType=Dem	9	nsubj	_	_
4	hätten	haben	AUX	VAFIN	_	9	aux	_	_
5	eher	eher	ADV	ADV	_	9	advmod	_	_
6	die	der	DET	ART	Definite=Def|PronType=Art	7	det	_	_
7	Klage	Klage	NOUN	NN	Case=Acc	9	obj	_	_
8	zu	zu	PART	PTKZU	_	9	mark	_	_
9	führen	führen	VERB	VVINF	_	2	acl	_	SpaceAfter=No
10	.	.	PUNCT	$.	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 13 acl	color:blue
1	Es	es	PRON	PPER	Gender=Neut|Number=Sing|Person=3|PronType=Prs	2	expl	_	_
2	gibt	geben	VERB	VVFIN	_	0	root	_	_
3	eine	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	4	det	_	_
4	Mikrologie	Mikrologie	NOUN	NN	Case=Acc	2	obj	_	SpaceAfter=No
5	,	,	PUNCT	$,	_	8	punct	_	_
6	und	und	CCONJ	KON	_	8	cc	_	_
7	einen	ein	DET	ART	Definite=Ind|NumType=Card|PronType=Art	8	det	_	_
8	Glauben	Glaube	NOUN	NN	_	4	conj	_	_
9	an	an	ADP	APPR	_	10	case	_	_
10	Autorität	Autorität	NOUN	NN	_	8	nmod	_	SpaceAfter=No
11	,	,	PUNCT	$,	_	13	punct	_	_
12	die	der	DET	ART	Definite=Def|PronType=Art	13	det	_	_
13	Charakterzüge	Charakterzug	NOUN	NN	Case=Nom	4	acl	_	_
14	der	der	DET	ART	Definite=Def|PronType=Art	15	det	_	_
15	Größe	Größe	NOUN	NN	_	13	nmod	_	_
16	sind	sein	AUX	VAFIN	_	13	cop	_	SpaceAfter=No
17	.	.	PUNCT	$.	_	2	punct	_	_

~~~


