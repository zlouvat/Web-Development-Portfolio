# How to Create SSH Keys and Use SCP to Transfer Files Remotely

## CREATING SSH KEY

### Step 1.

**Open Terminal on System (Windows/Linux)**

### Step 2.

**Generate SSH Key -- When Prompted with Passcode, enter no passphrase**

    ssh-keygen

## USING PUBLIC KEY FOR REMOTE LOGIN

### Step 1.

**Change Directory to .ssh from Home Directory**

    cd .ssh

### Step 2.

**Use SCP to transfer a copy of public key**

    scp id_rsa.pub ExamplePerson@remote_ip_address:

_DO NOT FORGET THE COLON FOR SCP_
_Enter Password for SCP to Login to Remote Machine_

### Step 3.

**Use SSH to login to remote machine**

    ssh ExamplePerson@remote_ip_address

### Step 4.

**Once in Remote Machine, Change Directory into SSH**<br>
_IF .ssh exists:_

    cd .ssh

_Else:_

    mkdir .ssh
    cd .ssh

### Step 5.

**Append public key into authorized_keys**

    cat ~/id_rsa.pub >> authorized_keys

### Step 6.

**Login Without Password ( Now that SSH Key is authorized you can login without a password)**

    ssh ExamplePerson@remote_ip_address

## DEPLOYING FILES REMOTELY

### Step 1.

**Create a Tar File(File Packaging)**

    cd exampleDir
    tar czvf example_files.tgz *

### Step 2.

**Transfer .tgz to your remote login(Using Catapult as Example)**

    scp example_files.tgz zlouvatb@catapult.bates.edu:

### Step 3.

**Organizing Files Remotely - Imagine this is a website we're building**

    ssh zlouvatb@catapult.bates.edu
    mkdir public_html
    mv ~/example_files.tgz .
    tar xzvf example_files.tgz
    rm example_files.tgz

_Do not forget to remove the packaged file after use_
