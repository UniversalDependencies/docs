---
layout: base
title:  'Tokenization'
---

# Words and Tokens

The universal dependency annotation is based on a lexicalist view of syntax, which means that dependency relations 
hold between _words_. Hence, morphological features are encoded as properties of words and there is no attempt at
segmenting words into morphemes. However, because we are interested in _syntactic_ words (not phonological or 
orthographic words), it is sometimes necessary to extract multiple words out of a single white-space delimited token. 
This applies in particular to clitics, such as Spanish _dámelo_ = _da me lo_, and contractions, such as French _au_ = _à le_. 
(In principle, the lexicalist view could also be taken to imply that certain multiword annotations should be treated 
as single words in the annotation. So far, however, multiword expressions are annotated as such using special dependency relations, rather than by collapsing multiple tokens into one.)

For languages where the extraction of words from white-space delimited tokens is nondeterministic (and hence is an integral
part of morphosyntactic analysis), we include both words and tokens in the treebank using a two-level indexing scheme described below. The morphological and syntactic annotation is only defined at the word level, but a heuristic mapping to the token level can usually be provided. For languages not using white-space, such as Chinese and Japanese, a complex word segmentation algorithm needs to be employed and there is no need to differentiate tokens and words. Similarly, for languages where word segmentation is simple and straightforward (or where a standard segmentation algorithm can be assumed), only words need to be represented in the treebank.

To accommodate representation of both tokens and words, we adopt an extension of the original CoNLL-X token indexing scheme, where words are indexed with integers 1, 2, 3, ..., while (multiword) tokens are indexed with integer ranges like 1-2 or 3-5. 
Lines representing such tokens are inserted before the first word in the range.
These ranges must be nonempty and must not overlap.
They have a FORM value –
the string that occurs in the sentence – but have an underscore in all the remaining fields (because the token  represents multiple words, each with its own lemma, part-of-speech tag, syntactic head, and so on). 
This is illustrated in the following annotation snippet,
showing only the first three fields for the Spanish sentence _vámonos al mar_ (let's go to the sea):

    1-2    vámonos   _
    1      vamos     ir
    2      nos       nosotros
    3-4    al        _
    3      a         a
    4      el        el
    5      mar       mar		

We extract the word sequence by skipping all range IDs:

    1      vamos     ir
    2      nos       nosotros
    3      a         a
    4      el        el
    5      mar       mar		

We extract the raw token sequence by skipping all integer IDs that are included in a preceding range ID:

    1-2    vámonos   _
    3-4    al        _
    5      mar       mar		

To facilitate the use of CoNLL-U treebanks, we provide a script that extracts either the annotated _word_ sequence (with
the original integer IDs) or the raw _token_ sequence with a heuristic mapping of morphological and syntactic annotation and plain integer indexing (like [the traditional CoNLL-X format](http://ilk.uvt.nl/conll/#dataformat)). Moreover, to 
facilitate parser evaluation for languages with nondeterministic word segmentation, we also provide a mapping to a format
where tokens are indexed with integers and words (if needed) with decimals. We refer to this scheme as _token indexing_, 
in contrast to the _word indexing_ scheme used as the offical treebank representation. Our running example looks as follows with token indexing:

    1      vámonos   _
    1.1    vamos     ir
    1.2    nos       nosotros
    2      al        _
    2.1    a         a
    2.2    el        el
    3      mar       mar		

# Miscellaneous

The final MISC field is for storing any additional information that does not fit into any of the other fields, such as language-specific annotation, any information about other linguistic levels such as discourse,
or projective heads and dependency relations (cf. the old PHEAD and PDEPREL fields of 
the CoNLL-X format). The exact format used in this field should be specified in the
treebank-specific documentation, but it is recommended to use a list of attribute-value pairs as in the FEATS field. 
If the MISC field is not used, it should contain an underscore.

## Untokenized text

To facilitate reconstruction of original (pre-tokenization) text, the information on original word segmentation should be kept if available. Every token after which there was no space in the original text should contain `SpaceAfter=No` in its MISC field. Note that this feature applies to the token level, not to the word level. Syntactic words that are just part of surface tokens will be ignored during detokenization and thus do not need the feature. In the example below, the line indexed 1 does not contain the `SpaceAfter` feature even though there was no space between _He_ and _'s_ in the underlying sentence. However, if there was no space between _He's_ and the third token, the 1-2 line would have `SpaceAfter=No`.

    1-2   He's      _         _       _       _                _   _        _   _
    1     He        he        PRON    PRN     Num=Sing|Per=3   2   nsubj    _   _
    2     is        be        VERB    VBZ     Tense=Pres       0   root     _   _
    3     in        in        ADP     IN      _                6   case     _   _
    4     the       the       DET     DT      PronType=Art     6   det      _   _
    5     United    unite     VERB    VBD     VerbForm=Part    6   nfincl   _   _
    6     Kingdom   kingdom   NOUN    NN      Num=Sing         2   nmod     _   _
    7     (         (         PUNCT   -LRB-   _                8   punct    _   SpaceAfter=No
    8     UK        UK        PROPN   NNP     Num=Sing         6   appos    _   SpaceAfter=No
    9     )         )         PUNCT   -RRB-   _                8   punct    _   SpaceAfter=No
    10    .         .         PUNCT   .       _                2   punct    _   _
