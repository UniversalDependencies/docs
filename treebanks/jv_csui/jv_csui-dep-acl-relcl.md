---
layout: base
title:  'Statistics of acl:relcl in UD_Javanese-CSUI'
udver: '2'
---

## Treebank Statistics: UD_Javanese-CSUI: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="jv_csui-dep-acl.html">acl</a></tt>.

261 nodes (2%) are attached to their parents as `acl:relcl`.

261 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.44444444444444.

The following 16 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (167; 64% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (46; 18% instances), <tt><a href="jv_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (12; 5% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (11; 4% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (5; 2% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt> (4; 2% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="jv_csui-pos-PRON.html">PRON</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="jv_csui-pos-VERB.html">VERB</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="jv_csui-pos-NOUN.html">NOUN</a></tt>-<tt><a href="jv_csui-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="jv_csui-pos-PART.html">PART</a></tt>-<tt><a href="jv_csui-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="jv_csui-pos-PROPN.html">PROPN</a></tt>-<tt><a href="jv_csui-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="jv_csui-pos-X.html">X</a></tt>-<tt><a href="jv_csui-pos-ADJ.html">ADJ</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl:relcl	color:blue
1	Buku	_	NOUN	_	Number=Sing	6	nsubj:pass	_	_
2	ku	_	PRON	_	Number=Sing|Person=1|Polite=Infm|PronType=Prs	1	nmod:poss	_	_
3	sing	_	PRON	_	Polite=Infm|PronType=Rel	4	nsubj	_	_
4	ilang	_	VERB	_	Mood=Ind|Voice=Act	1	acl:relcl	_	_
5	wis	_	AUX	_	Polite=Infm	6	aux	_	_
6	ketemu	_	VERB	_	Mood=Ind|Polite=Infm|Voice=Pass	0	root	_	SpaceAfter=No
7	.	_	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 acl:relcl	color:blue
1	Bocah	_	NOUN	_	Number=Sing|Polite=Infm	3	nsubj	_	_
2	kuwi	_	DET	_	Polite=Infm|PronType=Dem	1	det	_	_
3	seneng	_	VERB	_	Mood=Ind|Voice=Act	0	root	_	_
4	nggambar	_	VERB	_	Mood=Ind|Voice=Act	3	xcomp	_	_
5	sesawangan	_	NOUN	_	Number=Sing|Polite=Infm	4	obj	_	_
6	sing	_	PRON	_	Polite=Infm|PronType=Rel	7	nsubj	_	_
7	asri	_	ADJ	_	_	5	acl:relcl	_	SpaceAfter=No
8	.	_	PUNCT	_	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 4 acl:relcl	color:blue
1	Sapa	_	PRON	_	PronType=Rel	6	nsubj	_	_
2	wae	_	ADV	_	Polite=Infm	1	advmod	_	_
3	sing	_	PRON	_	Polite=Infm|PronType=Rel	4	nsubj	_	_
4	nyawang	_	VERB	_	Mood=Ind|Voice=Act	1	acl:relcl	_	_
5	mesthi	_	AUX	_	Polite=Form	6	aux	_	_
6	bungah	_	ADJ	_	Polite=Infm	0	root	_	SpaceAfter=No
7	.	_	PUNCT	_	_	6	punct	_	_

~~~


