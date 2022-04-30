---
layout: base
title:  'Statistics of acl:relcl in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-acl.html">acl</a></tt>.

32 nodes (2%) are attached to their parents as `acl:relcl`.

32 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.

The following 7 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (17; 53% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (9; 28% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (2; 6% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NUM.html">NUM</a></tt> (1; 3% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (1; 3% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 9 acl:relcl	color:blue
1	Ing	Ing	ADP	_	_	2	case	_	_
2	audhisi	audhisi	X	_	Foreign=Yes	9	obl	_	_
3	mau	mau	DET	_	Polite=Infm|PronType=Dem	2	det	_	Level=Ngoko|SpaceAfter=No
4	,	,	PUNCT	_	_	7	punct	_	_
5	namung	namung	ADV	_	Polite=Form	7	advmod	_	Level=Krama
6	11	11	NUM	_	NumType=Card	7	nummod	_	_
7	tiyang	tiyang	NOUN	_	Number=Sing|Polite=Form	0	root	_	Level=Krama
8	ingkang	ingkang	PRON	_	Polite=Form|PronType=Rel	9	nsubj	_	Level=Krama
9	dipuntampi	tampi	VERB	_	Mood=Ind|Polite=Form|Voice=Pass	7	acl:relcl	_	Level=Krama
10	saking	saking	ADP	_	Polite=Form	13	case	_	Level=Krama
11	2.396	2.396	NUM	_	NumType=Card	13	nummod	_	_
12	tiyang	tiyang	NOUN	_	Number=Sing|Polite=Form	13	clf	_	Level=Krama
13	pelamar	lamar	NOUN	_	Number=Sing	9	obl	_	SpaceAfter=No
14	.	.	PUNCT	_	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 acl:relcl	color:blue
1	Karya	karya	NOUN	_	Number=Sing	7	nsubj	_	_
2	né	é	PRON	_	Number=Sing|Person=3|Polite=Infm|PronType=Prs	1	nmod:poss	_	Level=Ngoko
3	kang	kang	PRON	_	Polite=Infm|PronType=Rel	5	nsubj	_	Level=Ngoko
4	paling	paling	ADV	_	_	5	advmod	_	_
5	wigati	wigati	ADJ	_	Polite=Infm	1	acl:relcl	_	Level=Ngoko
6	yaiku	yaiku	AUX	_	Polite=Infm	7	cop	_	Level=Ngoko
7	Trilogi	Trilogi	PROPN	_	_	0	root	_	_
8	Cinta	Cinta	PROPN	_	_	7	flat:name	_	SpaceAfter=No
9	(	(	PUNCT	_	_	10	punct	_	SpaceAfter=No
10	爱情的三部曲	爱情的三部曲	X	_	Foreign=Yes	7	appos	_	SpaceAfter=No
11	)	)	PUNCT	_	_	10	punct	_	SpaceAfter=No
12	.	.	PUNCT	_	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 acl:relcl	color:blue
1	Kriteria	kriteria	X	_	Foreign=Yes	4	nsubj:pass	_	_
2	punika	punika	DET	_	Polite=Form|PronType=Dem	1	det	_	Level=Krama
3	kedah	kedah	AUX	_	Polite=Form	4	aux	_	Level=Krama
4	dipunterapaken	terap	VERB	_	Mood=Ind|Polite=Form|Voice=Pass	0	root	_	Level=Krama
5	ing	ing	ADP	_	_	6	case	_	_
6	konsekuensi-konsekuensi	konsekuensi	X	_	Foreign=Yes	4	obl	_	_
7	ingkang	ingkang	PRON	_	Polite=Form|PronType=Rel	8	nsubj	_	Level=Krama
8	timbul	timbul	VERB	_	Mood=Ind|Voice=Act	6	acl:relcl	_	_
9	saking	saking	ADP	_	Polite=Form	10	case	_	Level=Krama
10	putusan-putusan	putus	NOUN	_	Number=Plur	8	obl	_	_
11	etis	etis	X	_	Foreign=Yes	10	dep	_	SpaceAfter=No
12	.	.	PUNCT	_	_	4	punct	_	_

~~~


