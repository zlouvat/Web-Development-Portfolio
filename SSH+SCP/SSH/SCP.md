# How to Create SSH Keys and Use SCP to Transfer Files Remotely

# CREATING SSH KEY

Step 1.
Open Terminal on System (Windows/Linux)

Step 2.
Generate SSH Key -- When Prompted with Passcode, enter no passphrase
Command: ssh-keygen

# USING PUBLIC KEY FOR REMOTE LOGIN

Step 1.
Change Directory to .ssh from Home Directory
Command: cd .ssh

Step 2.
Use SCP to transfer a copy of public key
Command: scp id_rsa.pub ExamplePerson@remote_ip_address: # DO NOT FORGET THE COLON FOR SCP

    - Enter Password for SCP to Login to Remote Machine

Step 3.
Use SSH to login to remote machine
Command: ssh ExamplePerson@remote_ip_address # NO COLON FOR SSH

    - Enter Password for Remote Machine

Step 4.
Once in Remote Machine, Change Directory into SSH
IF .ssh exists:
Command: cd .ssh
Else:
Command: mkdir .ssh
cd .ssh

Step 5.
Append public key into authorized_keys
Command: cat ~/id_rsa.pub >> authorized_keys

Step 6.
Login Without Password ( Now that SSH Key is authorized you can login without a password)
Command: ssh ExamplePerson@remote_ip_address
