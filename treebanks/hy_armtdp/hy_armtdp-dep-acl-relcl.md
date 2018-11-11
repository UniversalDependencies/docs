---
layout: base
title:  'Statistics of acl:relcl in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `acl:relcl`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-acl.html">acl</a></tt>.

161 nodes (1%) are attached to their parents as `acl:relcl`.

160 instances of `acl:relcl` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.70186335403727.

The following 12 pairs of parts of speech are connected with `acl:relcl`: <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (97; 60% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (17; 11% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (14; 9% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (10; 6% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (10; 6% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (5; 3% instances), <tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="hy_armtdp-pos-DET.html">DET</a></tt>-<tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt>-<tt><a href="hy_armtdp-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="hy_armtdp-pos-X.html">X</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 acl:relcl	color:blue
1	Թռավ	թռչել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
2	ձիուն	ձի	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	1	obl	_	SpaceAfter=No
3	,	,	PUNCT	_	_	6	punct	_	_
4	որը	որ	PRON	_	Case=Nom|Definite=Def|Number=Sing|PronType=Rel	6	obj	_	_
5	ծառան	ծառա	NOUN	_	Animacy=Hum|Case=Nom|Definite=Def|Number=Sing	6	nsubj	_	_
6	մոտեցրել	մոտենալ	VERB	_	Aspect=Perf|Subcat=Tran|VerbForm=Part|Voice=Act	2	acl:relcl	_	_
7	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	6	aux	_	_
8	նրան	նա	PRON	_	Case=Dat|Definite=Def|Number=Sing|Person=3|PronType=Prs	6	obl	_	SpaceAfter=No
9	:	:	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 9 acl:relcl	color:blue
1	Առաստաղին	առաստաղ	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Def|Number=Sing	2	obl	_	_
2	տարածվեցին	տարածվել	VERB	_	Aspect=Perf|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	_
3	անձրևաջրի	անձրևաջուր	NOUN	_	Animacy=Nhum|Case=Dat|Definite=Ind|Number=Sing	5	nmod:poss	_	_
4	սրճագույն	սրճագույն	ADJ	_	_	5	amod	_	_
5	հետքերը	հետք	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	2	nsubj	_	SpaceAfter=No
6	,	,	PUNCT	_	_	9	punct	_	_
7	որոնք	որ	PRON	_	Case=Nom|Number=Plur|PronType=Rel	9	nsubj	_	_
8	շատ	շատ	ADV	_	Degree=Pos	9	advmod	_	_
9	խոշոր	խոշոր	ADJ	_	Degree=Pos	5	acl:relcl	_	_
10	էին	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Imp|VerbForm=Fin	9	cop	_	SpaceAfter=No
11	...	...	PUNCT	_	_	2	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 7 acl:relcl	color:blue
1	Իսկ	իսկ	CCONJ	_	_	2	advmod:emph	_	_
2	ընտրությունները	ընտրություն	NOUN	_	Animacy=Nhum|Case=Nom|Definite=Def|Number=Plur	3	nsubj	_	_
3	կլինեն	լինել	VERB	_	Aspect=Prosp|Mood=Cnd|Number=Plur|Person=3|Polarity=Pos|Subcat=Intr|Tense=Pres|VerbForm=Fin|Voice=Mid	0	root	_	_
4	այնպիսին	այնպիսի	PRON	_	Case=Nom|Definite=Def|Distance=Dist|Number=Sing|PronType=Dem	3	obl	_	SpaceAfter=No
5	,	,	PUNCT	_	_	7	punct	_	_
6	ինչպիսին	ինչպիսի	PRON	_	Case=Dat|Number=Sing|PronType=Rel	7	obl	_	_
7	եղել	լինել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	4	acl:relcl	_	_
8	են	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Plur|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	7	aux	_	SpaceAfter=No
9	:	:	PUNCT	_	_	3	punct	_	_

~~~


