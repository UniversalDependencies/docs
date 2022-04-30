---
layout: base
title:  'Statistics of compound:svc in UD_Naija-NSC'
udver: '2'
---

## Treebank Statistics: UD_Naija-NSC: Relations: `compound:svc`

This relation is a language-specific subtype of <tt><a href="pcm_nsc-dep-compound.html">compound</a></tt>.
There are also 2 other language-specific subtypes of `compound`: <tt><a href="pcm_nsc-dep-compound-prt.html">compound:prt</a></tt>, <tt><a href="pcm_nsc-dep-compound-redup.html">compound:redup</a></tt>.

1277 nodes (1%) are attached to their parents as `compound:svc`.

1277 instances of `compound:svc` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.85591229444009.

The following 10 pairs of parts of speech are connected with `compound:svc`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1237; 97% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (24; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (7; 1% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:svc	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=10145|AlignEnd=10516|Gloss=PUNCT
2	sey	sey	SCONJ	_	_	4	discourse	_	AlignBegin=10516|AlignEnd=10640|Gloss=COMP
3	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	AlignBegin=10640|AlignEnd=10679|Gloss=NOM.SG.3
4	wan	want	VERB	_	_	0	root	_	AlignBegin=10679|AlignEnd=10850|Gloss=want
5	carry	carry	VERB	_	_	4	xcomp	_	AlignBegin=10850|AlignEnd=11170|Gloss=carry
6	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obj	_	AlignBegin=11170|AlignEnd=11370|Gloss=ACC.SG.1
7	go	go	VERB	_	_	5	compound:svc	_	AlignBegin=11370|AlignEnd=11503|Gloss=go
8	meh	make	SCONJ	_	_	10	mark	_	AlignBegin=11533|AlignEnd=11710|Gloss=that
9	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	AlignBegin=11710|AlignEnd=11770|Gloss=NOM.SG.3
10	go	go	VERB	_	_	5	advcl	_	AlignBegin=11770|AlignEnd=12120|Gloss=go
11	train	train	VERB	_	_	10	compound:svc	_	AlignBegin=12120|AlignEnd=12430|Gloss=train
12	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	11	obj	_	AlignBegin=12430|AlignEnd=12550|Gloss=ACC.SG.1
13	//	//	X	_	_	4	dep	_	AlignBegin=12550|AlignEnd=12580|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 compound:svc	color:blue
1	#	#	X	_	_	4	dep	_	AlignBegin=99810|AlignEnd=100276|Gloss=PUNCT
2	{	{	X	_	_	4	dep	_	AlignBegin=99810|AlignEnd=100276|Gloss=PUNCT
3	na	na	AUX	_	PartType=Cop	4	cop	_	AlignBegin=100276|AlignEnd=100388|Gloss=be
4	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	0	root	_	AlignBegin=100388|AlignEnd=100526|Gloss=NOM.PL.3
5	||	||	X	_	_	7	dep	_	AlignBegin=100526|AlignEnd=100556|Gloss=PUNCT
6	na	na	AUX	_	PartType=Cop	7	cop	_	AlignBegin=100556|AlignEnd=100707|Gloss=be
7	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	3	reparandum	_	AlignBegin=100707|AlignEnd=100850|Gloss=NOM.PL.3
8	fi~	X	X	_	_	7	advcl:cleft	_	AlignBegin=100850|AlignEnd=101022|Gloss=X|Scrap=Yes
9	||	||	X	_	_	11	dep	_	AlignBegin=101022|AlignEnd=101052|Gloss=PUNCT
10	na	na	AUX	_	PartType=Cop	11	cop	_	AlignBegin=101052|AlignEnd=101178|Gloss=be
11	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	6	reparandum	_	AlignBegin=101178|AlignEnd=101285|Gloss=NOM.PL.3
12	||	||	X	_	_	14	dep	_	AlignBegin=101285|AlignEnd=101315|Gloss=PUNCT
13	na	na	AUX	_	PartType=Cop	14	cop	_	AlignBegin=101315|AlignEnd=101485|Gloss=be
14	dem	dem	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	10	reparandum	_	AlignBegin=101485|AlignEnd=101609|Gloss=ACC.PL.3
15	}	}	X	_	_	4	dep	_	AlignBegin=101609|AlignEnd=101639|Gloss=PUNCT
16	>+	>+	X	_	_	17	dep	_	AlignBegin=101609|AlignEnd=101639|Gloss=PUNCT
17	fine	fine	ADJ	_	_	14	advcl:cleft	_	AlignBegin=101639|AlignEnd=101840|Gloss=fine
18	pass	pass	VERB	_	_	17	compound:svc	_	AlignBegin=101840|AlignEnd=102070|Gloss=pass
19	ehn	ehn	INTJ	_	_	4	discourse	_	AlignBegin=102100|AlignEnd=102485|Gloss=ehn
20	//	//	X	_	_	4	dep	_	AlignBegin=102485|AlignEnd=102515|Gloss=PUNCT

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:svc	color:blue
1	naim	naim	ADV	_	_	3	advmod	_	AlignBegin=330449|AlignEnd=330528|Gloss=then
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	AlignBegin=330528|AlignEnd=330570|Gloss=NOM.SG.1
3	take	take	VERB	_	_	0	root	_	AlignBegin=330570|AlignEnd=330680|Gloss=take
4	spu~	X	X	_	_	3	compound:svc	_	AlignBegin=330680|AlignEnd=330800|Gloss=X
5	||	||	X	_	_	8	dep	_	AlignBegin=330800|AlignEnd=330830|Gloss=PUNCT
6	naim	naim	ADV	_	_	8	advmod	_	AlignBegin=330830|AlignEnd=330980|Gloss=then
7	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	AlignBegin=330980|AlignEnd=331040|Gloss=NOM.SG.1
8	take	take	VERB	_	_	3	reparandum	_	AlignBegin=331040|AlignEnd=331176|Gloss=take
9	speak	speak	VERB	_	_	8	compound:svc	_	AlignBegin=331176|AlignEnd=331440|Gloss=speak
10	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	obj	_	AlignBegin=331440|AlignEnd=331550|Gloss=ACC.SG.3
11	//	//	X	_	_	3	dep	_	AlignBegin=331550|AlignEnd=331580|Gloss=PUNCT

~~~


