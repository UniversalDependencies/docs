---
layout: base
title:  'Statistics of acl:relcl in UD_Swedish-SweLL'
udver: '2'
---

## Treebank Statistics: UD_Swedish-SweLL: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="sv_swell-dep-acl.html">acl</a></tt>.
There are also 1 other language-specific subtypes of `acl`: <tt><a href="sv_swell-dep-acl-cleft.html">acl:cleft</a></tt>.

139 nodes (1%) are attached to their parents as `acl:relcl`.

139 instances of `acl:relcl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.20143884892086.

The following 10 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (100; 72% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (18; 13% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (5; 4% instances), <tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (4; 3% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (3; 2% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-ADJ.html">ADJ</a></tt> (3; 2% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-VERB.html">VERB</a></tt> (3; 2% instances), <tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sv_swell-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-PRON.html">PRON</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 1% instances), <tt><a href="sv_swell-pos-PROPN.html">PROPN</a></tt>-<tt><a href="sv_swell-pos-NOUN.html">NOUN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	5	nsubj	_	_
2	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	5	cop	_	_
3	den	den	DET	_	Definite=Def|Gender=Com|Number=Sing|PronType=Art	5	det	_	_
4	bästa	bra	ADJ	_	Case=Nom|Definite=Def|Degree=Sup	5	amod	_	_
5	sak	sak	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	_
6	vad	vad	PRON	_	Definite=Ind|Gender=Neut|Number=Sing|PronType=Int	9	obj	_	CorrectionLabels=L-W
7	man	man	PRON	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing|PronType=Ind	9	nsubj	_	_
8	kan	kunna	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
9	uppleva	uppleva	VERB	_	VerbForm=Inf|Voice=Act	5	acl:relcl	_	_
10	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 acl:relcl	color:blue
1	Det	den	PRON	_	Definite=Def|Gender=Neut|Number=Sing|PronType=Prs	11	nsubj	_	_
2	som	som	PRON	_	PronType=Rel	3	nsubj	_	_
3	påverkar	påverka	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	acl:relcl	_	_
4	mina	jag	PRON	_	Definite=Def|Number=Plur|Poss=Yes|PronType=Prs	5	nmod:poss	_	_
5	inköpsvannor	inköpsvana	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur|Typo=Yes	3	obj	_	CorrectionLabels=O|SurfaceLemma=inköpsvanna
6	av	av	ADP	_	_	7	case	_	CorrectionLabels=S-Clause
7	kläder	kläder	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	5	nmod	_	_
8	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
9	mest	mycket	ADV	_	Degree=Sup	11	advmod	_	_
10	deras	de	PRON	_	Definite=Def|Poss=Yes|PronType=Prs	11	nmod:poss	_	_
11	användarbarhet	användarbarhet	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Sing	0	root	_	CorrectionLabels=L-Der
12	.	.	PUNCT	_	_	11	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 acl:relcl	color:blue
1	Men	men	CCONJ	_	_	3	cc	_	_
2	ibland	ibland	ADV	_	_	3	advmod	_	_
3	har	ha	VERB	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	vi	vi	PRON	_	Case=Nom|Definite=Def|Gender=Com|Number=Plur|PronType=Prs	3	nsubj	_	_
5	fördomar	fördom	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	3	obj	_	_
6	baserade	baserad	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur|Tense=Past|VerbForm=Part	5	acl:relcl	_	_
7	på	på	ADP	_	_	11	mark	_	_
8	hur	hur	ADV	_	_	11	advmod	_	_
9	människor	människa	NOUN	_	Case=Nom|Definite=Ind|Gender=Com|Number=Plur	11	nsubj	_	_
10	är	vara	AUX	_	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	11	cop	_	_
11	klädda	klädd	ADJ	_	Case=Nom|Definite=Ind|Degree=Pos|Number=Plur|Tense=Past|VerbForm=Part	6	advcl	_	_
12	.	.	PUNCT	_	_	3	punct	_	_

~~~


