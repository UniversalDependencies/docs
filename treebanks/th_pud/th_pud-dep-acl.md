---
layout: base
title:  'Statistics of acl in UD_Thai-PUD'
udver: '2'
---

## Treebank Statistics: UD_Thai-PUD: Relations: `acl`

This relation is universal.
There are 1 language-specific subtypes of `acl`: <tt><a href="th_pud-dep-acl-relcl.html">acl:relcl</a></tt>.

977 nodes (4%) are attached to their parents as `acl`.

976 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.99181166837257.

The following 11 pairs of parts of speech are connected with `acl`: <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (670; 69% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (251; 26% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (25; 3% instances), <tt><a href="th_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (15; 2% instances), <tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (8; 1% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-VERB.html">VERB</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="th_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="th_pud-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="th_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="th_pud-pos-NUM.html">NUM</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 acl	color:blue
1	ข้อ	ข้อ	NOUN	NN	_	6	nsubj	_	SpaceAfter=No|Translit=kʰɔ̂ː|LTranslit=kʰɔ̂ː
2	กำหนด	กำหนด	VERB	VV	_	1	acl	_	SpaceAfter=No|Translit=kãːhnd|LTranslit=kãːhnd
3	เรื่อง	เรื่อง	NOUN	NN	_	1	compound	_	SpaceAfter=No|Translit=rüàːŋ|LTranslit=rüàːŋ
4	การแต่ง	การแต่ง	VERB	VV	_	3	compound	_	SpaceAfter=No|Translit=kaːrtæ̀ːŋ|LTranslit=kaːrtæ̀ːŋ
5	กาย	กาย	NOUN	NN	_	4	obj	_	SpaceAfter=No|Translit=kaːy|LTranslit=kaːy
6	อาจ	อาจ	VERB	MD	_	0	root	_	SpaceAfter=No|Translit='aːč|LTranslit='aːč
7	ล้า	ล้า	VERB	VV	_	6	xcomp	_	SpaceAfter=No|Translit=lâː|LTranslit=lâː
8	สมัย	สมัย	NOUN	NN	_	6	obl	_	SpaceAfter=No|Translit=smạy|LTranslit=smạy
9	ไป	ไป	PART	RP	_	7	compound:prt	_	SpaceAfter=No|Translit=pại|LTranslit=pại
10	หน่อย	หน่อย	ADV	RB	_	6	advmod	_	Translit=hnɔ̀ːy|LTranslit=hnɔ̀ːy

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 10 acl	color:blue
1	พวก	พวก	NOUN	NN	_	3	nsubj	_	SpaceAfter=No|Translit=bʰwk|LTranslit=bʰwk
2	เขา	เขา	PRON	PRP	Person=3|PronType=Prs	1	compound	_	Gloss=he,she|SpaceAfter=No|Translit=kʰaoː|LTranslit=kʰaoː
3	มี	มี	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=miː|LTranslit=miː
4	โอกาส	โอกาส	NOUN	NN	_	3	obj	_	SpaceAfter=No|Translit='oːkaːs|LTranslit='oːkaːs
5	เดียว	เดียว	ADJ	JJ	_	4	amod	_	SpaceAfter=No|Translit=diaːw|LTranslit=diaːw
6	ที่	ที่	DET	WDT	PronType=Rel	8	obl:tmod	_	Gloss=that,which|SpaceAfter=No|Translit=dʰìː|LTranslit=dʰìː
7	จะ	จะ	AUX	MD	_	8	aux	_	SpaceAfter=No|Translit=ča|LTranslit=ča
8	ไถ่	ไถ่	VERB	VV	_	4	acl:relcl	_	SpaceAfter=No|Translit=tʰạì|LTranslit=tʰạì
9	ตัว	ตัว	NOUN	NN	_	8	obj	_	SpaceAfter=No|Translit=tuaː|LTranslit=tuaː
10	คืน	คืน	VERB	VV	_	8	acl	_	SpaceAfter=No|Translit=gʰüːn|LTranslit=gʰüːn
11	โดย	โดย	ADP	IN	_	12	case	_	SpaceAfter=No|Translit=doːy|LTranslit=doːy
12	การเอาชนะ	การเอาชนะ	VERB	VV	_	3	xcomp	_	SpaceAfter=No|Translit=kaːr'aoːćʰna|LTranslit=kaːr'aoːćʰna
13	อังกฤษ	อังกฤษ	PROPN	NNP	_	12	obj	_	Translit='ạŋkṟš|LTranslit='ạŋkṟš

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 acl	color:blue
1	รถ	รถ	NOUN	NN	_	2	nsubj	_	SpaceAfter=No|Translit=rtʰ|LTranslit=rtʰ
2	ระเบิด	ระเบิด	VERB	VV	_	0	root	_	SpaceAfter=No|Translit=rabeid|LTranslit=rabeid
3	เป็น	เป็น	AUX	VC	_	4	cop	_	SpaceAfter=No|Translit=pen|LTranslit=pen
4	เปลว	เปลว	NOUN	NN	_	2	acl	_	SpaceAfter=No|Translit=peːlw|LTranslit=peːlw
5	เพลิง	เพลิง	NOUN	NN	_	4	compound	_	Translit=bʰeːliŋ|LTranslit=bʰeːliŋ
6	แล้ว	แล้ว	ADP	IN	_	9	mark	_	SpaceAfter=No|Translit=læ̂ːw|LTranslit=læ̂ːw
7	เคนเซ็ท	เคนเซ็ท	PROPN	NNP	_	9	nsubj	_	SpaceAfter=No|Translit=gʰeːncedʰ|LTranslit=gʰeːncedʰ
8	ก็	ก็	ADV	RB	_	9	advmod	_	SpaceAfter=No|Translit=kɔʔ|LTranslit=kɔʔ
9	เดิน	เดิน	VERB	VV	_	2	advcl	_	SpaceAfter=No|Translit=dein|LTranslit=dein
10	ออก	ออก	PART	RP	_	9	compound:prt	_	SpaceAfter=No|Translit='ɔːk|LTranslit='ɔːk
11	ไป	ไป	PART	RP	_	9	compound:prt	_	Translit=pại|LTranslit=pại

~~~


