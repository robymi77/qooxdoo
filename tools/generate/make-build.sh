#!/bin/bash

cd `dirname $0`/../..

tools/generate/internal/compress.sh
tools/generate/internal/combine.sh
tools/generate/internal/syncfiles.sh
tools/generate/internal/patchdemos.sh
