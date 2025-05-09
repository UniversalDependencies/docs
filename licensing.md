---
layout: base
title:  'Licensing UD data'
udver: '2'
---

# Licensing UD treebanks

This page documents how UD treebanks are licensed. It provides information for UD data providers
(while the users of the treebanks should refer to the LICENSE files of the individual treebanks).
**Disclaimer:** This page has not been written by a lawyer and it should not be considered legal advice!

UD is distributed with a mixed license where the license terms of individual treebanks vary.
Most UD treebanks use a variant of a Creative Commons (CC) license. The main difference is that
some treebanks use the NonCommercial (NC) version of the license, i.e., they cannot be used for
commercial purposes. This is always the decision of the data providers: New treebank repositories
are created with CC BY-SA 4.0 by default, but the data provider can change it to CC BY-NC-SA 4.0.

As a treebank contributor, you are responsible for giving it a suitable license. We will assume
that you have the right to make the data available under this license in a UD release; do not
upload data to a UD repository unless the data is copyright-free, or you hold the copyright, or
you have obtained the permission to use and distribute the data from the copyright holder!

There are two places within each treebank repository where the license is indicated; if you change
one of them, you must make sure to change the other accordingly! First, there is a file named
`LICENSE.txt`. It normally contains only a reference to the website with the full text of the
license, although it is possible to also copy the text to the file. Second, the machine-readable
metadata section at the end of the `README.md` file contains a `License:` line, which must contain
the string identifying the license.

For historical reasons, some treebanks have older versions of CC licenses. It is also possible
to have a less restrictive CC license (such as CC BY 4.0). Do not use a more restrictive license;
specifically, **avoid licenses with the NoDerivatives (ND) restriction.** This is evil because it
could be taken as freezing the data without a possibility to fix it if the UD guidelines or
validation change; it is also questionable whether a parsing model can be trained on such data
and then made available to users.

A few legacy treebanks have non-CC licenses, including the GNU GPL, which is designed for software
code (rather than corpora) and should not be used in UD treebanks.

A limiting factor is often the underlying text, which may be copyrighted. Some treebanks
(for example, the GSD treebanks of several languages) explicitly indicate that their license
pertains to the annotations and the treebank authors do not claim any ownership over the
underlying texts. This typically applies to sentences crawled from the web; in addition, the
sentences are shuffled (or randomly sampled) so they do not form a coherent discourse
(working under the assumption that a single sentence is unlikely to constitute a copyrightable
work). While this technique may help avoid copyright infringement, it should be the last resort,
as it makes the data useless for any linguistic research that looks beyond the sentence boundary.
It is preferable to use text that can be reproduced as a whole (or, if shuffling is inevitable,
at least shuffle blocks that contain several sentences).

In extreme cases, a few UD treebanks provide only the UD annotations without the words, which
have to be obtained from another source (sometimes free of charge, sometimes not). This may
sometimes make sense for corpora that already have broad user bases, but in general it makes
the treebank a second-class citizen, which most UD users will just ignore.
