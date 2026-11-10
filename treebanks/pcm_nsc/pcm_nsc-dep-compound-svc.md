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
Average distance between parent and child is 1.8770555990603.

The following 9 pairs of parts of speech are connected with `compound:svc`: <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1242; 97% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (24; 2% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-X.html">X</a></tt> (3; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-ADV.html">ADV</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt>-<tt><a href="pcm_nsc-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt>-<tt><a href="pcm_nsc-pos-SCONJ.html">SCONJ</a></tt> (1; 0% instances), <tt><a href="pcm_nsc-pos-X.html">X</a></tt>-<tt><a href="pcm_nsc-pos-VERB.html">VERB</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 7 compound:svc	color:blue
1	#	#	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=10145|WordAlignmentEnd=10516
2	sey	sey	SCONJ	_	_	4	discourse	_	Gloss=COMP|WordAlignmentBegin=10516|WordAlignmentEnd=10640
3	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	4	nsubj	_	Gloss=NOM.SG.3|WordAlignmentBegin=10640|WordAlignmentEnd=10679
4	wan	want	VERB	_	_	0	root	_	Gloss=want|WordAlignmentBegin=10679|WordAlignmentEnd=10850
5	carry	carry	VERB	_	_	4	xcomp	_	Gloss=carry|WordAlignmentBegin=10850|WordAlignmentEnd=11170
6	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	5	obj	_	Gloss=ACC.SG.1|WordAlignmentBegin=11170|WordAlignmentEnd=11370
7	go	go	VERB	_	_	5	compound:svc	_	Gloss=go|WordAlignmentBegin=11370|WordAlignmentEnd=11533
8	meh	make	SCONJ	_	_	10	mark	_	Gloss=that|WordAlignmentBegin=11533|WordAlignmentEnd=11710
9	e	im	PRON	_	Case=Nom|Number=Sing|Person=3|PronType=Prs	10	nsubj	_	Gloss=NOM.SG.3|WordAlignmentBegin=11710|WordAlignmentEnd=11770
10	go	go	VERB	_	_	5	advcl	_	Gloss=go|WordAlignmentBegin=11770|WordAlignmentEnd=12120
11	train	train	VERB	_	_	10	compound:svc	_	Gloss=train|WordAlignmentBegin=12120|WordAlignmentEnd=12430
12	me	me	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs	11	obj	_	Gloss=ACC.SG.1|WordAlignmentBegin=12430|WordAlignmentEnd=12580
13	//	//	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=12580|WordAlignmentEnd=12580

~~~


~~~ conllu
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 17	bgColor:blue
# visual-style 17	fgColor:white
# visual-style 17 18 compound:svc	color:blue
1	#	#	PUNCT	_	_	14	punct	_	Gloss=PUNCT|WordAlignmentBegin=99810|WordAlignmentEnd=100276
2	{	{	PUNCT	_	_	14	punct	_	Gloss=PUNCT|WordAlignmentBegin=99810|WordAlignmentEnd=100276
3	na	na	AUX	_	PartType=Cop	4	cop	_	Gloss=be|WordAlignmentBegin=100276|WordAlignmentEnd=100388
4	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	reparandum	_	Gloss=NOM.PL.3|WordAlignmentBegin=100388|WordAlignmentEnd=100556
5	||	||	PUNCT	_	_	4	punct	_	Gloss=PUNCT|WordAlignmentBegin=100556|WordAlignmentEnd=100556
6	na	na	AUX	_	PartType=Cop	7	cop	_	Gloss=be|WordAlignmentBegin=100556|WordAlignmentEnd=100707
7	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	reparandum	_	Gloss=NOM.PL.3|WordAlignmentBegin=100707|WordAlignmentEnd=100850
8	fi~	X	X	_	_	7	advcl:cleft	_	Gloss=X|Scrap=Yes|WordAlignmentBegin=100850|WordAlignmentEnd=101052
9	||	||	PUNCT	_	_	7	punct	_	Gloss=PUNCT|WordAlignmentBegin=101052|WordAlignmentEnd=101052
10	na	na	AUX	_	PartType=Cop	11	cop	_	Gloss=be|WordAlignmentBegin=101052|WordAlignmentEnd=101178
11	dem	dem	PRON	_	Case=Nom|Number=Plur|Person=3|PronType=Prs	14	reparandum	_	Gloss=NOM.PL.3|WordAlignmentBegin=101178|WordAlignmentEnd=101315
12	||	||	PUNCT	_	_	11	punct	_	Gloss=PUNCT|WordAlignmentBegin=101315|WordAlignmentEnd=101315
13	na	na	AUX	_	PartType=Cop	14	cop	_	Gloss=be|WordAlignmentBegin=101315|WordAlignmentEnd=101485
14	dem	dem	PRON	_	Case=Acc|Number=Plur|Person=3|PronType=Prs	0	root	_	Gloss=ACC.PL.3|WordAlignmentBegin=101485|WordAlignmentEnd=101639
15	}	}	PUNCT	_	_	14	punct	_	Gloss=PUNCT|WordAlignmentBegin=101639|WordAlignmentEnd=101639
16	>+	>+	PUNCT	_	_	17	punct	_	Gloss=PUNCT|WordAlignmentBegin=101609|WordAlignmentEnd=101639
17	fine	fine	ADJ	_	_	14	advcl:cleft	_	Gloss=fine|WordAlignmentBegin=101639|WordAlignmentEnd=101840
18	pass	pass	VERB	_	_	17	compound:svc	_	Gloss=pass|WordAlignmentBegin=101840|WordAlignmentEnd=102100
19	ehn	ehn	INTJ	_	_	4	discourse	_	Gloss=ehn|WordAlignmentBegin=102100|WordAlignmentEnd=102515
20	//	//	PUNCT	_	_	19	punct	_	Gloss=PUNCT|WordAlignmentBegin=102515|WordAlignmentEnd=102515

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 compound:svc	color:blue
1	naim	naim	ADV	_	_	3	advmod	_	Gloss=then|WordAlignmentBegin=330449|WordAlignmentEnd=330528
2	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=NOM.SG.1|WordAlignmentBegin=330528|WordAlignmentEnd=330570
3	take	take	VERB	_	_	8	reparandum	_	Gloss=take|WordAlignmentBegin=330570|WordAlignmentEnd=330680
4	spu~	X	X	_	_	3	compound:svc	_	Gloss=X|WordAlignmentBegin=330680|WordAlignmentEnd=330830
5	||	||	PUNCT	_	_	3	punct	_	Gloss=PUNCT|WordAlignmentBegin=330830|WordAlignmentEnd=330830
6	naim	naim	ADV	_	_	8	advmod	_	Gloss=then|WordAlignmentBegin=330830|WordAlignmentEnd=330980
7	I	I	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	8	nsubj	_	Gloss=NOM.SG.1|WordAlignmentBegin=330980|WordAlignmentEnd=331040
8	take	take	VERB	_	_	0	root	_	Gloss=take|WordAlignmentBegin=331040|WordAlignmentEnd=331176
9	speak	speak	VERB	_	_	8	compound:svc	_	Gloss=speak|WordAlignmentBegin=331176|WordAlignmentEnd=331440
10	am	am	PRON	_	Case=Acc|Number=Sing|Person=3|PronType=Prs	9	obj	_	Gloss=ACC.SG.3|WordAlignmentBegin=331440|WordAlignmentEnd=331580
11	//	//	PUNCT	_	_	8	punct	_	Gloss=PUNCT|WordAlignmentBegin=331580|WordAlignmentEnd=331580

~~~


